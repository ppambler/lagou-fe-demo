// class Functor {
//   static of(value) {
//     return new Functor(value);
//   }

//   constructor(value) {
//     this.val = value;
//   }
//   map(fn) {
//     return Functor.of(fn(this.val));
//   }
// }

// function addOne(x) {
//   return x + 1;
// }

// const A = Functor.of(1);
// const B = Functor.of(addOne)

// class Ap extends Functor {
//   ap(F) {
//     return Ap.of(this.val(F.val));
//   }
// }

// console.log(Ap.of(addOne).ap(Functor.of(2)))

const Functor = (number) => ({
  map: (fn) => {
    return Functor(fn(number));
  },
  value: number,
});

function addOne(x) {
  return x + 1;
}

const Ap = (number) => ({
  value: number,
  map: (fn) => {
    return Ap(fn(number));
  },
  ap: (F) => F.map(Ap(number).value)
});

console.log(Ap(addOne).ap(Functor(2))) // AP(3)

function add(x) {
  return function (y) {
    return x + y;
  };
}

console.log(Ap(add).ap(Ap(2)).ap(Ap(3))) // Ap(5)
console.log(Ap(add(2)).ap(Ap(3))) // Ap(5)
console.log(Ap(2).map(add).ap(Ap(5))) // Ap(7)
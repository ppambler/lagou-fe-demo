// MayBe 函子
// class MayBe {
//   static of(value) {
//     return new MayBe(value);
//   }

//   constructor(value) {
//     this._value = value;
//   }

//   map(fn) {
//     return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
//   }

//   isNothing() {
//     return this._value === null || this._value === undefined;
//   }
// }

// const MayBe = (string) => ({
//   map: (fn) => {
//     return MayBe(string).isNothing()
//       ? MayBe(null)
//       : MayBe(fn(string));
//   },
//   isNothing: () => {
//     return (
//       MayBe(string).value === null ||
//       MayBe(string).value === undefined
//     );
//   },
//   value: string,
// });

const isNothing = (value) => value === null || typeof value === "undefined";

const Maybe = (value) => ({
  map: (fn) => (isNothing(value) ? Maybe(null) : Maybe(fn(value))),
  value,
});

// let r = MayBe.of('Hello World')
//           .map(x => x.toUpperCase())
// console.log(r)

// let r = MayBe.of(null)
//           .map(x => x.toUpperCase())
// console.log(r)

// // 传入具体值
// MayBe.of("Hello World").map((x) => x.toUpperCase());
// // 传入 null 的情况
// MayBe.of(null).map((x) => x.toUpperCase());
// // => MayBe { _value: null }

// let r = MayBe.of("hello world")
//   .map((x) => x.toUpperCase())
//   .map((x) => null)
//   .map((x) => x.split(" "));
// console.log(r); // MayBe { _value: null }

let r1 = Maybe("hello world")
  .map((x) => x.toUpperCase())
  .map((x) => null)
  .map((x) => x.split(" "));
console.log(r1);

// { map: [Function: map], isNothing: [Function: isNothing], value: null }

let r2 = Maybe("hello world").map((x) => x.toUpperCase());
console.log(r2);

// {
//   map: [Function: map],
//   isNothing: [Function: isNothing],
//   value: 'HELLO WORLD'
// }

const user = {
  name: "Holmes",
  address: { street: "Baker Street", number: "221B" },
};
console.log(
  Maybe(user)
    .map((u) => u.address)
    .map((a) => a.street).value
); // 'Baker Street'

const homelessUser = { name: "The Tramp" };
console.log(
  Maybe(homelessUser)
    .map((u) => u.address)
    .map((a) => a.street).value
); // null

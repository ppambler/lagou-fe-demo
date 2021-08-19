class Ap {
  static of(val) {
    return new Ap(val);
  }

  constructor(val) {
    this._value = val;
  }

  map(fn) {
    return Ap.of(fn(this._value));
  }

  // ap 方法接收另一个函子作为参数，调用其 map 方法返回一个新的函子
  ap(otherContainer) {
    return otherContainer.map(this._value);
  }
}

function getSum(x) {
  return function (y) {
    return x + y;
  };
}

// 能够把一个函子的函数值应用到另一个函子的值上
let sum1 = Ap.of(getSum).ap(Ap.of(2)).ap(Ap.of(5));
// 输出：Ap { _value: 7 }
console.log(sum1);

let sum2 = Ap.of(getSum(2)).ap(Ap.of(5));
// 输出：Ap { _value: 7 }
console.log(sum2);

let sum3 = Ap.of(2).map(getSum).ap(Ap.of(5));
// 输出：Ap { _value: 7 }
console.log(sum3);

// IO 函子
const fp = require("lodash/fp");

class IO {
  // value 是一个数据
  static of(value) {
    // 给创建的 IO 函子传递的是一个函数，该函数把值包裹起来了！
    return new IO(function () {
      // 把求值的过程延迟处理了，想要这个数据，那就调用 IO 函子的 value 函数
      return value;
    });
  }
  // fn 是一个函数
  constructor(fn) {
    this._value = fn;
  }

  map(fn) {
    // 把当前的 value 和 传入的 fn 组合成一个新的函数，该新函数作为新 IO 函子的值
    return new IO(fp.flowRight(fn, this._value));
  }
}

// 调用
let r = IO.of(process).map((p) => p.execPath);
// console.log(r)
console.log(r._value());

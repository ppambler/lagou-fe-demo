// // Functor 函子

// class Container {
//   constructor (value) {
//     this._value = value
//   }

//   map (fn) {
//     return new Container(fn(this._value))
//   }
// }

// let r = new Container(5)
//   .map(x => x + 1)
//   .map(x => x * x)

// console.log(r) // Container { _value: 36 }

// 一个容器，包裹一个值
class Container {
  // of 静态方法，可以省略 new 关键字创建对象
  static of(value) {
    return new Container(value);
  }

  constructor(value) {
    this._value = value;
  }
  // map 方法，传入变形关系，将容器里的每一个值映射到另一个容器
  map(fn) {
    return Container.of(fn(this._value));
  }
}

const NumberBox = (number) => ({
  map: (fn) => {
    return NumberBox(fn(number));
  },
  value: number,
});

console.log(
  NumberBox(5)
    .map((x) => x ** 2)
    .map((x) => x + 5)
); // { map: [Function: map], value: 30 }

// 测试
// let r = Container.of(5)
//   .map((x) => x + 2)
//   .map((x) => x * x);

// console.log(r); // Container { _value: 49 }

// // 演示 null undefined 的问题
// Container.of(null).map((x) => x.toUpperCase());

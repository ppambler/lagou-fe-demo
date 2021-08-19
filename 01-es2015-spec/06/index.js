// // Object.assign 方法

// const source1 = {
//   a: 123,
//   b: 123,
// };

// const source2 = {
//   b: 789,
//   d: 789,
// };

// const target = {
//   a: 456,
//   c: 456,
// };

// const result = Object.assign(target, source1, source2);

// console.log(target); // { a: 123, c: 456, b: 789, d: 789 }
// console.log(result === target); // true

// // 应用场景

// function func(obj) {
//   // obj.name = 'func obj'
//   // console.log(obj)
//   const funcObj = Object.assign({}, obj);
//   funcObj.name = "func obj";
//   console.log(funcObj);
// }

// const obj = { name: "global obj" };
// func(obj); // { name: 'func obj' }
// console.log(obj); // { name: 'global obj' }


var name = "make";
var i = 0;
const laptop = {
  [name + ++i]: "Apple",
  [name + ++i]: "Dell",
  [name + ++i]: "HP",
};

console.log(laptop.make1); //"Apple"
console.log(laptop.make2); //"Dell"
console.log(laptop.make3); //"HP"

// 柯里化案例
"".match(/\s+/g);
"".match(/\d+/g);

const _ = require("lodash");

const match = _.curry(function (reg, str) {
  return str.match(reg);
});

// function match(reg, str) {
//   return str.match(reg);
// }

const haveSpace = match(/\s+/g);
console.log(haveSpace('ni hao '))
const haveNumber = match(/\d+/g);
console.log(haveNumber('1me2 l2'))
const filter = _.curry(function (func, array) {
  return array.filter(func);
});

const findSpace = filter(haveSpace);

// console.log(haveSpace('helloworld'))
// console.log(haveNumber('abc'))

console.log(filter(haveSpace, ["John Connor", "John_Donne"]));

console.log(findSpace(["John Connor", "John_Donne"]));

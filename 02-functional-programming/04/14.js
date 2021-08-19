// lodash 和 lodash/fp 模块中 map 方法的区别

const _ = require("lodash");

console.log(_.map(["23", "8", "10"], parseInt)); // [ 23, NaN, 2 ]

// parseInt('23', 0, array)
// parseInt('8', 1, array)
// parseInt('10', 2, array)

const fp = require("lodash/fp");

console.log(fp.map(parseInt, ["23", "8", "10"])); // [ 23, 8, 10 ]

const f = fp.flowRight(fp.join("-"), fp.map(_.toLower), fp.split(" "));

// Hello World => hello_world


// 非 Point Free 模式
function f(word) {
  return word.toLowerCase().replace(/\s+/g, "_");
}



// Point Free
const fp = require("lodash/fp");
const f = fp.flowRight(fp.replace(/\s+/g, "_"), fp.toLower);
console.log(f("Hello World"));

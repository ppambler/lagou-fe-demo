// lodash 中的函数组合的方法 _.flowRight()

const _ = require("lodash");

const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];
const toUpper = (s) => s.toUpperCase();

const f = _.flowRight(toUpper, first, reverse);
console.log(f(["one", "two", "three"])); // THREE

const arr = [1, 2, 3, 4, 5, 6];

arr.reduce((total, currentVal, currentIndex, arr) => {
  console.log(total, currentVal, currentIndex);
  return total + currentVal;
});
arr.reduce((total, currentVal, currentIndex, arr) => {
  console.log(total, currentVal, currentIndex);
  return total + currentVal;
}, 100);

// 1 2 1
// 3 3 2
// 6 4 3
// 10 5 4
// 15 6 5

// 100 1 0
// 101 2 1
// 103 3 2
// 106 4 3
// 110 5 4
// 115 6 5
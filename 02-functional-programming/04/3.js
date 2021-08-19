// 演示 lodash
// first / last / toUpper / reverse / each / includes / find / findIndex
const _ = require("lodash");

const array = ["jack", "tom", "lucy", "kate"];

// console.log(_.first(array))
// console.log(_.head(array))
// console.log(_.last(array))

// console.log(array)

// console.log(_.toUpper(_.first(array)))

// console.log(_.reverse(array))
// console.log(array)

// const r = _.each(array, (item, index) => {
//   console.log(item, index)
// })

// console.log(r)

// _.find

const array1 = [
  "jack",
  "tom",
  "lucy",
  "kate",
  { age: 18, name: "one" },
  { age: 19, name: "two" },
];

console.log(_.includes(array1, "jack"));
console.log(_.includes(array1, "tom", 2));
console.log(_.includes(array1, "tom", 1));

// true
// false
// true

// 找元素是对象的

console.log(_.find(array1, "age"));
console.log(_.find(array1, (o) => o.age < 20));
console.log(_.find(array1, { age: 19 }));
console.log(_.find(array1, ["age", 19]));

// { age: 18, name: 'one' }
// { age: 18, name: 'one' } 
// { age: 19, name: 'two' }
// { age: 19, name: 'two' } 

console.log(_.findIndex(array1, "tom"));
console.log(_.findIndex(array1, ["age", 18]));
console.log(_.findIndex(array1, ["age", 19]));

// -1
// 4
// 5

// 从右到左遍历
console.log(_.findLastIndex(array1, "tom"));
console.log(_.findLastIndex(array1, ["age", 18]));
console.log(_.findLastIndex(array1, ["age", 19]));

// -1
// 4
// 5

console.log(array1.reverse())
console.log(array1.reverse())
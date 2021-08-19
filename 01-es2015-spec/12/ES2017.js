// ECMAScript 2017

const obj = {
  foo: 'value1',
  bar: 'value2'
}

// Object.values -----------------------------------------------------------

console.log(Object.keys(obj)) // [ 'foo', 'bar' ]
console.log(Object.values(obj)) // [ 'value1', 'value2' ]

// Object.entries ----------------------------------------------------------

console.log(Object.entries(obj)) // [ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value)
}

// foo value1
// bar value2

console.log(new Map(Object.entries(obj))) // Map(2) { 'foo' => 'value1', 'bar' => 'value2' }

// Object.getOwnPropertyDescriptors ----------------------------------------

const p1 = {
  firstName: 'Lei',
  lastName: 'Wang',
  get fullName () {
    return this.firstName + ' ' + this.lastName
  },
  [Symbol(0)]: 666
}

// console.log(p1.fullName) // Lei Wang
// p1.fullName = '666'
// console.log(p1.fullName)

// const p2 = Object.assign({}, p1)
// p2.firstName = 'zce'
// console.log(p2) // { firstName: 'zce', lastName: 'Wang', fullName: 'Lei Wang' }


const descriptors = Object.getOwnPropertyDescriptors(p1)
console.log(descriptors)
const p2 = Object.defineProperties({}, descriptors)
p2.firstName = 'zce'
console.log(p2.fullName)
console.log(p2)

// {
//   firstName: {
//     value: 'Lei',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   lastName: {
//     value: 'Wang',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   fullName: {
//     get: [Function: get fullName],
//     set: undefined,
//     enumerable: true,
//     configurable: true
//   }
// }
// zce Wang

// String.prototype.padStart / String.prototype.padEnd  --------------------

const books = {
  html: 5,
  css: 16,
  javascript: 128
}

for (const [name, count] of Object.entries(books)) {
  console.log(name, count)
}

// html 5
// css 16
// javascript 128

for (const [name, count] of Object.entries(books)) {
  console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(3, '0')}`)
}

// html------------|005
// css-------------|016
// javascript------|128

// 在函数参数中添加尾逗号  -----------------------------------------------------

// function foo (
//   bar,
//   baz,
// ) {

// }

// const arr = [
//   100,
//   200,
//   300,
// ]

// const arr = [
//   300,
//   200,
//   100,
// ]

// const arr = [
//   100,
//   200,
//   300,
//   400,
// ]


// const arr = [
//   100,
//   200,
//   300
// ]
// const arr = [
//   100,
//   200,
//   300,
//   400
// ]

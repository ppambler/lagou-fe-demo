// function * foo () {
//   console.log('zce')
//   return 100
// }

// const result = foo()
// console.log(result.next())

// // zce
// // { value: 100, done: true }

// console.log(result) // Object [Generator] {}

function * foo () {
  console.log('1111')
  yield 100
  console.log('2222')
  yield 200
  console.log('3333')
  yield 300
  console.log('4444')
  return 400
  console.log('5555')
}

const generator = foo()

console.log(generator.next()) 
// 
console.log(generator.next()) 
// 
console.log(generator.next()) 
// 
console.log(generator.next()) 
console.log('------')
console.log(generator.next())

// 1111
// { value: 100, done: false }
// 2222
// { value: 200, done: false }
// 3333
// { value: 300, done: false }
// 4444
// { value: 400, done: true }
// ------
// { value: undefined, done: true }

// // const arr = [100, 200, 300, 400]

// // for (const item in arr) {
// //   console.log(item)
// // }

// // 100
// // 200
// // 300
// // 400

// // for...of 循环可以替代 数组对象的 forEach 方法

// // arr.forEach(item => {
// //   console.log(item)
// // })

// // 100
// // 200
// // 300
// // 400

// // for (const item of arr) {
// //   console.log(item)
// //   if (item > 100) {
// //     break
// //   }
// // }

// // 100
// // 200

// // forEach 无法跳出循环，必须使用 some 或者 every 方法

// const arr = [100, 200, 300, 400]

// // arr.forEach() // 不能跳出循环

// arr.some((item)=>{
//   console.log(item)
//   // if(item > 100) {
//   //   return true
//   // }
//   return item > 100
// })
// console.log(arr)
// console.log('---')
// arr.every((item)=>{
//   console.log(item)
//   if(item > 100) {
//     return false
//   }
//   // return true
// })
// console.log(arr)

// // 100
// // 200
// // [ 100, 200, 300, 400 ]
// // ---
// // 100
// // [ 100, 200, 300, 400 ]

// // 遍历 Set 与遍历数组相同

// const s = new Set(['foo', 'bar'])

// for (const item of s) {
//   console.log(item)
// }

// // foo
// // bar

// 遍历 Map 可以配合数组结构语法，直接获取键值

// const m = new Map()
// m.set('foo', '123')
// m.set('bar', '345')

// for (const item of m) {
//   console.log(item)
// }

// // [ 'foo', '123' ]
// // [ 'bar', '345' ]

// for (const [key, value] of m) {
//   console.log(key, value)
// }

// foo 123
// bar 345

// 普通对象不能被直接 for...of 遍历

// const obj = { foo: 123, bar: 456 }

// for (const item of obj) {
//   console.log(item)
// }

// TypeError: obj is not iterable
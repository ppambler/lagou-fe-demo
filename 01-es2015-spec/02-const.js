// const name = 'zce'
// // 恒量声明过后不允许重新赋值
// name = 'jack'


// 恒量要求声明同时赋值
// const name
// name = 'zce'

// let xxx
// console.log(xxx)
// xxx = 'Hello'

// var yyy 

// yyy = "World"

// console.log(xxx+yyy)

// let x = 'global'
// {
//   console.log(x) // Uncaught ReferenceError: x is not defined
//   let x = 1
// }


// 恒量只是要求内层指向不允许被修改
const obj = {}

// 对于数据成员的修改是没有问题的
obj.name = 'zce'

obj = {}



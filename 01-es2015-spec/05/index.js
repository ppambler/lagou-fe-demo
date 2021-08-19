// // 箭头函数

// function inc (number) {
//   return number + 1
// }

// // 最简方式
// const inc = n => n + 1

// // 完整参数列表，函数体多条语句，返回值仍需 return
// const inc = (n, m) => {
//   console.log('inc invoked')
//   return n + 1
// }

// console.log(inc(100))

// const arr = [1, 2, 3, 4, 5, 6, 7]

// arr.filter(function (item) {
//   return item % 2
// })

// // 常用场景，回调函数
// console.log(arr.filter(i => i % 2))
// console.log(arr)
// console.log(arr[0] % 2) // 1
// console.log(arr[1] % 2) // 0

// 箭头函数与 this
// 箭头函数不会改变 this 指向

// const person = {
//   name: 'tom',
//   sayHi: () => {
//     console.log(`hi, my name is ${this.name}`)
//   },
//   sayHiAsync: function () {

//     setTimeout(() => {
//       console.log(this.name)
//     }, 1000)
//   }
// }

// person.sayHiAsync() // tom

var obj = {
  count: 10,
  doSomethingLater: function () {
    // of course, arrow functions are not suited for methods
    setTimeout(() => {
      // since the arrow function was created within the "obj", it assumes the object's "this"
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // 11



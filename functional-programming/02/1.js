// 高阶函数-函数作为参数

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

// 测试
let arr = [1, 3, 4, 7, 8];

forEach(arr, function (item) {
  if(item > 4 ) {
    break;
  }
  console.log(item);
});

// function fn(item) {
//   console.log(item);
// }
// let array = [1, 3, 4, 7, 8];
// for (let i = 0; i < array.length; i++) {
//   fn(array[i]);
// }

// 1
// 3
// 4
// 7
// 8

// filter
// function filter(array, fn) {
//   let results = [];
//   for (let i = 0; i < array.length; i++) {
//     if (fn(array[i])) {
//       results.push(array[i]);
//     }
//   }
//   return results;
// }

// // 测试
// let arr = [1, 3, 4, 7, 8]
// let r = filter(arr, function (item) {
//   return item % 2 === 0
// })

// console.log(r) // [ 4, 8 ]


// const arr = [1,2,3,4,5]

// arr.forEach((item)=>{
//   if(item>3) {
//     break;
//   }
//   console.log(item)
// })
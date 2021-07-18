// // if (true) {
// //   // var foo = 'zce'
// //   let foo = 'zce'
// // }
// // console.log(foo)

// // for (var i = 0; i < 3; i++) {
// //   for (var i = 0; i < 3; i++) {
// //     console.log(i)
// //   }
// //   console.log('内层结束 i = ' + i)
// // }

// // for (var i = 0; i < 3; i++) {
// //   for (let i = 0; i < 3; i++) {
// //     console.log(i)
// //   }
// //   console.log('内层结束 i = ' + i)
// // }

// // var elements = [{}, {}, {}]
// // for (var i = 0; i < elements.length; i++) {
// //   elements[i].onclick = function () {
// //     console.log(i)
// //   }
// // }
// // elements[2].onclick()

// // var elements = [{}, {}, {}]
// // for (var i = 0; i < elements.length; i++) {
// //   elements[i].onclick = (function (i) {
// //     return function () {
// //       console.log(i)
// //     }
// //   })(i)
// // }
// // elements[1].onclick() // 1

// // var elements = [{}, {}, {}]
// // for (let i = 0; i < elements.length; i++) {
// //   elements[i].onclick = function () {
// //     console.log(i)
// //   }
// // }
// // elements[0].onclick() // 0

// // for (let i = 0; i < 3; i++) {
// //   let i = 'foo'
// //   console.log(i)
// // }
// // foo
// // foo
// // foo

// {
//   let i = 0;

//   if (i < 3) {
//     let i = "foo";
//     console.log(i);
//   }

//   i++;

//   if (i < 3) {
//     let i = "foo";
//     console.log(i);
//   }

//   i++;

//   if (i < 3) {
//     let i = "foo";
//     console.log(i);
//   }

//   i++;
// }

// console.log(i);

// console.log(foo)
// let foo = 'zce'



// for (let i = 0; i < 3; i++) {
//   let i = i;
//   console.log(i);
// }

{
  let i = 0
  {
    let i = i // 右边的 i -> Cannot access 'i' before initialization
    console.log(i)
  }
}



// 函数作为返回值



// function makeFn() {
//   let msg = "Hello function";
//   return function () {
//     console.log(msg);
//   };
// }
// const fn = makeFn();
// fn();




// // once
// function once(fn) {
//   let done = false;
//   return function () {
//     if (!done) {
//       done = true;
//       return fn.apply(this, arguments);
//     }
//   };
// }

// let pay = once(function (money) {
//   console.log(`支付: ${money} RMB`);
// });

// pay(5);
// pay(5);
// pay(5);
// pay(5);

function outer() {
  let out = 'out'
  let n = 0
  return {
    out,
    changOut() {
      out = out+(++n)
      console.log(out)
    }
  }
}

let obj = outer()
obj.changOut()
console.log(obj.out)
obj.changOut()
console.log(obj.out)
obj.changOut()
console.log(obj.out)
obj.changOut()
console.log(obj.out)

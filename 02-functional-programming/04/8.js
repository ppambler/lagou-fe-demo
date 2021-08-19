// 模拟实现 lodash 中的 curry 方法

function getSum(a, b, c) {
  return a + b + c;
}

const curried = curry(getSum);

console.log(curried(1, 2, 3, 4));
console.log(curried(1)(2, 3));
console.log(curried(1, 2)(3));
console.log(curried(1)(2)(3));

// 0x101 -> curriedFn
// 0x102 -> f1
// 0x103 ->

// function curry (func) {
//   return function curriedFn(...args) {
//     // 判断实参和形参的个数
//     if (args.length < func.length) {
//       return function () {
//         return curriedFn(...args.concat(Array.from(arguments)))
//       }
//     }
//     return func(...args)
//   }
// }

// function curry1(func) {
//   return function f1(...args) {
//     if(args.length < func.length) {
//       return function f2(...args)
//     }
//   }
// }

function curry(func) {
  return function curriedFn(...args) {
    // 判断实参个数是否小于 func 的形参个数
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    }
    return func(...args);
  };
}

// function foo (enable) {
//   // 短路运算很多情况下是不适合判断默认参数的，例如 0 '' false null
//   // enable = enable || true
//   enable = enable === undefined ? true : enable
//   console.log('foo invoked - enable: ')
//   console.log(enable)
// }


// function foo (enable) {
//   enable = enable || true
//   console.log('foo invoked - enable: ')
//   console.log(enable)
// }

function foo (enable=true,rest) {
  console.log(rest)
  console.log('foo invoked - enable: ')
  console.log(enable)
}


foo(undefined,1)
// function foo(...args) {
//   console.log(args)
// }

// foo(1,2,3)

// const arr = ['foo', 'bar', 'baz']
// console.log(
//   arr[0],
//   arr[1],
//   arr[2],
// )

// console.log.apply(console, arr)

// const arr = ['foo', 'bar', 'baz']

// console.log(...arr)

// console.log('foo', 'bar', 'baz')

// function sum(x = 1, y = x,  z = x + y) {
//   console.log( x + y + z );
// }

// sum(); // 4

// function sum( x = y, y = 1 ) {
//   // console.log( x + y);
//   let x
//   x = y
//   console.log(x+y)
// }

// sum();

// let x = y
// let y = 1

// using a function in default value expression

const sum = () => 15;

const calculate = function (x, y = x * sum()) {
  return x + y;
};

const result = calculate(10);
console.log(result); // 160

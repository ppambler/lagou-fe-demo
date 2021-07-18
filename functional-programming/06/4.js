// function compose(...funcs) {
//   return function (...args) {
//     let result,
//       len = funcs.length;
//     if (len === 0) {
//       result = args;
//     } else if (len === 1) {
//       result = funcs[0](...args);
//     } else {
//       result = funcs.reduce((x, y) => {
//         return typeof x === "function" ? y(x(...args)) : y(x);
//       });
//     }
//     return result;
//   };
// }
// const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)

function compose(...funcs) {
  if (funcs.length === 0) {
    console.log(funcs);
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    console.log(funcs);
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];
const toUpper = (s) => s.toUpperCase();

// const f = compose(reverse,first,toUpper);
const f = compose(toUpper, first, reverse);
console.log(f);
console.log(f(["one", "two", "three"]));

["one", "two", "three"].reduce(
  function(a,b) {
    console.log(a,b)
    return function(...args) {
      a(b(...args))
    }
  }
);

reverse(...[1,2,3])



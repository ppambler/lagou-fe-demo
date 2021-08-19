// IO Monad
const fs = require("fs");
const fp = require("lodash/fp");

// class IO {
//   static of(value) {
//     return new IO(function () {
//       return value;
//     });
//   }

//   constructor(fn) {
//     this._value = fn;
//   }

//   map(fn) {
//     return new IO(fp.flowRight(fn, this._value));
//   }

//   join() {
//     return this._value();
//   }

//   flatMap(fn) {
//     return this.map(fn).join();
//   }
// }

const IO = (value) => ({
  value,
  map: (fn) => IO(fp.flowRight(fn, IO(value).value)),
  flatMap: (fn)=> IO(value).map(fn).join(),
  join:()=> IO(value).value()
});

let readFile = function (filename) {
  return IO(function () {
    return fs.readFileSync(filename, "utf-8");
  });
};

let print = function (x) {
  return IO(function () {
    console.log(x);
    return x;
  });
};

// function () {
//   console.log(x);
//   return x;
// }

// flatMap -> this.map(fn).join()
// join -> this._value()
// console.log(readFile("package.json").flatMap(print))
// IO { _value: [Function (anonymous)] }




let r = readFile("package.json")
          .map(fp.toUpper)
          .flatMap(print)
          .join();

console.log(r);



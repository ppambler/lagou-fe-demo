// Task 处理异步任务
const fs = require("fs");
const { task } = require("folktale/concurrency/task");
const { split, find } = require("lodash/fp");

function readFile(filename) {
  return task((resolver) => {
    console.log(777)
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) resolver.reject(err);

      resolver.resolve(data);
    });
    console.log(888)
  });
}

console.log(readFile('package.json'))
console.log(1)

// readFile("package.json")
//   .map((x)=> {
//     console.log(555)
//     return split("\n",x)
//   })
//   .map(find((x) => {
//     console.log(999)
//     return x.includes("version")
//   })).run().listen({
//     onRejected: (err) => {
//       console.log(1)
//       console.log(err);
//     },
//     onResolved: (value) => {
//       console.log(value);
//     },
//   })

// console.log(666)
// console.log(
//   readFile("package.json")
//     .map(split("\r\n"))
//     .map(find((x) => x.includes("version")))
// );
// console.log(
//   readFile("package.json")
//     .map(split("\r\n"))
//     .run()
//     .listen({
//       onRejected: (err) => {
//         console.log(err);
//       },
//       onResolved: (value) => {
//         console.log(value);
//       },
//     })
// );
// readFile("package.json")
//   .map(split("\n"))
//   .map(find((x) => x.includes("version")))
//   .run()
//   .listen({
//     onRejected: (err) => {
//       console.log(err);
//     },
//     onResolved: (value) => {
//       console.log(value);
//     },
//   });

// console.log(666);

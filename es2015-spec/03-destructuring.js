// // const path = '/foo/bar/baz'

// // // const tmp = path.split('/')
// // // console.log(tmp) // [ '', 'foo', 'bar', 'baz' ]
// // // const rootdir = tmp[1]
// // // console.log(rootdir)

// // const [, rootdir] = path.split('/')
// // console.log(rootdir)

// // const arr = [100, 200, undefined, null]

// // const [foo, bar, baz = 123, more = 'default value'] = arr
// // console.log(baz, more) // 123 null

// // // const [foo] = arr
// // // console.log(foo) // 100

// // const [foo, bar, baz, more] = arr
// // console.log(more) // undefined

// // const [foo, ...rest] = arr
// // console.log(rest) // [200,300]

// // const foo = arr[0]
// // const bar = arr[1]
// // const baz = arr[2]
// // console.log(foo, bar, baz) // 100 200 300

// // const [foo, bar, baz] = arr
// // console.log(foo, bar, baz)

// // const [, , baz] = arr
// // console.log(baz)

// // const obj = { name: "zce", age: 18 };
// // const name = "tom";
// // const { name: objName = "xxx", age, hobby = ["play"] } = obj;
// // console.log(objName, age, hobby); // zce 18 [ 'play' ]

// // const { log } = console;
// // log("foo");
// // log("bar");
// // log("123");

// let subscribers = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "johndoe@example.com",
//     age: 27
//   },
//   {
//     id: 2,
//     name: "Mark Lukas",
//     email: "marklukas@example.com",
//     age: 40
//   }
// ];

// subscribers.forEach(subscriber => {
//   let { name, email } = subscriber;
//   // console.log(`Emailing ${name}<${email}>`);

//   //Emailing John Doe<johndoe@example.com>
//   //Emailing Mark Lukas<marklukas@example.com>
// });
// ​

// const obj = {
//   name: "zce",
//   age: 18,
// };

// // const name = obj.name;
// // const age = obj.age;
// // console.log(name, age); //zce 18

// const { name, age } = obj;
// console.log(name, age); //zce 18

let subscribers = [
  {
    company: "Google",
    employee: {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 27,
    },
  },
  {
    company: "Microsoft",
    employee: {
      name: "Mark Lukas",
      email: "marklukas@example.com",
      age: 40,
    },
  },
];

subscribers.forEach((subscriber) => {
  let {
    employee: { name, email },
  } = subscriber;

  console.log(`Emailing ${name}<${email}>`);
  // Emailing John Doe<johndoe@example.com>
  // Emailing Mark Lukas<marklukas@example.com>
});

// let fruits = "fruits";
// let [a, b, c, d, e, f] = fruits;
// console.log(a); // f
// console.log(b); // r
// console.log(c); // u
// console.log(d); // i
// console.log(e); // t

// let a = "apple";
// let b = "banana";
// [a, b] = [b, a];
// console.log(a); //banana
// console.log(b); //apple

// let fruits = [
//   "apple",
//   "banana",
//   "carrot",
//   "Dewberries",
//   "Eggfruits",
//   "Farkleberry",
// ];

// //skip "apple"
// let [, b, c] = fruits;
// console.log(b); // banana
// console.log(c); // carrot

// //skip "apple","banana" and "carrot"
// let [, , , d] = fruits;
// console.log(d); // Dewberries

// let fruits = [
//   "apple",
//   "banana",
//   "carrot",
//   "Dewberries",
//   "Eggfruits",
//   "Farkleberry",
// ];
// let [a, b, ...others] = fruits;
// console.log(a); // apple
// console.log(b); // banana
// console.log(others); // [ 'carrot', 'Dewberries', 'Eggfruits', 'Farkleberry'

// function getFruits() {
//   return ["apple", "banana", "carrot"];
// }
// let [a, b, c] = getFruits();
// console.log(a); // apple
// console.log(b); // banna
// console.log(c); // carrot

// var fruits = { a: "apple", b: "banana" };
// var { c } = fruits;

// console.log(c); // undefined

// let fruits = [
//   "apple",
//   "banana",
//   "carrot",
//   "Dewberries",
//   "Eggfruits",
//   "Farkleberry",
// ];

// //set default
// var { c = "carrot" } = fruits;
// console.log(c); // carrot

// let { a, b = 1 } = {};
// console.log(a); // undefined
// console.log(b); // 1

function food({ a, b: fallback = "banana" }) {
  console.log(`I ate ${a} for breakfast and ${fallback} for dinner`);
}
food({ a: "apple", b: "carrot" }); // I ate apple for breakfast and carrot for dinner
food({ a: "apple" }); // I ate apple for breakfast and banana for dinner

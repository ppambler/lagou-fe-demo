// const obj = {
//   foo: '123',
//   bar: '456'
// }

// const proxy = new Proxy(obj, {})
// console.log(proxy.foo) // 123

// const proxy = new Proxy(obj, {
//   get (target, property) {
//     console.log('watch logic~')

//     return Reflect.get(target, property)
//   }
// })

// console.log(proxy.foo)

// // watch logic~
// // 123

const obj = {
  name: "zce",
  age: 18,
};

console.log("name" in obj);
console.log(delete obj["age"]);
console.log(Object.keys(obj));
// true
// true
// [ 'name' ]

console.log(Reflect.has(obj, "name"));
console.log(Reflect.deleteProperty(obj, "age"));
console.log(Reflect.ownKeys(obj));
// true
// true
// [ 'name' ]

const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
};
const handler = {
  get(target, property) {
    console.log(`Property ${property} has been read.`);
    return target[property];
  },
};
const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);

// Property firstName has been read.
// John
// Property lastName has been read.
// Doe

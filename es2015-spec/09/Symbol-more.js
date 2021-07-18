// Symbol 补充

// console.log(
//   Symbol() === Symbol(), // false
//   Symbol('foo') === Symbol('foo') // false
// )

// Symbol 全局注册表 ----------------------------------------------------

// const s1 = Symbol.for('foo')
// const s2 = Symbol.for('foo')
// console.log(s1 === s2) // true

// console.log(
//   Symbol.for(true) === Symbol.for('true')
// ) // true

// 内置 Symbol 常量 ---------------------------------------------------

// console.log(Symbol.iterator) // Symbol(Symbol.iterator)
// console.log(Symbol.hasInstance) // Symbol(Symbol.hasInstance)

// const obj1 = {}
// console.log(obj1.toString()) // [object Object]

// const obj = {
//   [Symbol.toStringTag]: 6
// }
// console.log(obj.toString()) // [object XObject]

// Symbol 属性名获取 ---------------------------------------------------

const obj = {
  [Symbol()]: 'symbol value',
  foo: 'normal value'
}

for (var key in obj) {
  console.log(key)
}
console.log(Object.keys(obj))
console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))

// foo
// [ 'foo' ]
// {"foo":"normal value"}
// [ Symbol() ]

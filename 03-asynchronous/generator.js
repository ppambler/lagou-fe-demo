// 生成器函数回顾

function* foo() {
  console.log('start')

  try {
    const res = yield 'foo'
    console.log(res)
    const res1 = yield 'baz'
    console.log(res1)
  } catch (e) {
    console.log(e)
    yield 'error'
  }
}

const generator = foo()

console.log(generator)

const result = generator.next(new Error('xxx'))
console.log(result)


console.log(generator.next(new Error('zzz'))) // undefined

console.log(generator.throw(new Error('Generator error')))
console.log(generator.next())




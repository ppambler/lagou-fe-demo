const set = new Set(['foo', 'bar', 'baz'])

const iterator = set[Symbol.iterator]()

while (true) {
  const current = iterator.next()
  if (current.done) {
    break // 迭代已经结束了，没必要继续了
  }
  console.log(current.value)
}

// foo
// bar
// baz

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// { value: 'foo', done: false }
// { value: 'bar', done: false }
// { value: 'baz', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }


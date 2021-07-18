// 实现可迭代接口（Iterable）

// const obj = {
//   [Symbol.iterator]: function () {
//     return {
//       next: function () {
//         return {
//           value: 'zce',
//           done: true
//         }
//       }
//     }
//   }
// }

// for (const item of obj) {
//   console.log('循环体', item)
// }

const obj = {
  store: ['foo', 'bar', 'baz'],

  [Symbol.iterator]: function () {
    let index = 0
    const self = this

    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++
        return result
      }
    }
  }
}

for (const item of obj) {
  console.log('循环体', item)
}

// 循环体 foo
// 循环体 bar
// 循环体 baz


const arr = []

const iterator = arr[Symbol.iterator]()

while (true) {
  const current = iterator.next()
  console.log(current)
  if (current.done) {
    break // 迭代已经结束了，没必要继续了
  }
  // for of 里的循环体
  {
    console.log(current.value)
  }
}

// foo
// bar
// baz


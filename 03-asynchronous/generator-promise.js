// Generator 配合 Promise 的异步方案

function ajax(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    xhr.send()
  })
}

function* main() {
  try {
    console.log(4)
    const users = yield ajax('/api/users.json')
    console.log(users)

    const posts = yield ajax('/api/posts.json')
    console.log(posts)

    const urls = yield ajax('/api/urls.json')
    console.log(urls)
  } catch (e) {
    console.log(e)
  }
}

console.log(main().next())
console.log(1)

// function co(generator) {
//   const g = generator()

//   function handleResult(result) {
//     if (result.done) return // 生成器函数结束
//     result.value.then(data => {
//       handleResult(g.next(data))
//     }, error => {
//       g.throw(error)
//     })
//   }

//   handleResult(g.next())
// }

// co(main)


// function co(generator) {
//   console.log(1)
//   const g = generator()

//   function handleResult(result) {
//     if (result.done) {
//       console.log('Generator 函数执行完成')
//       return
//     }
//     result.value.then(data => {
//       handleResult(g.next(data))
//     }, error => {
//       g.throw(error)
//     })
//   }

//   handleResult(g.next())
// }

// console.log(2)
// co(main)
// console.log(3)

// const g = main()

// function handleResult(result) {
//   if (result.done) return // 生成器函数结束
//   result.value.then(data => {
//     handleResult(g.next(data))
//   }, error => {
//     g.throw(error)
//   })
// }

// handleResult(g.next())


















// const result = g.next()

// result.value.then(data => {
//   const result2 = g.next(data)

//   if (result2.done) return

//   result2.value.then(data => {
//     const result3 = g.next(data)

//     if (result3.done) return

//     result3.value.then(data => {
//       g.next(data)
//     })
//   })
// })

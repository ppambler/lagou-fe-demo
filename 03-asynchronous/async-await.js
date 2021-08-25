// Async / Await 语法糖

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

async function main() {
  console.log(2)
  const promise1 = ajax('/api/users.json')
  const promise2 = ajax('/api/posts1.json')
  const promise3 = ajax('/api/urls1.json')
  console.log(6)
  const users = await promise1
  console.log(users)

  const posts = await promise2
  console.log(posts)

  const urls = await promise3
  console.log(urls)
}

// co(main)
console.log(4)
const promise = main()
console.log(3)
console.log(promise)
promise.then(() => {
  console.log('all completed')
}).catch((e) => { console.log(e) })
console.log(1)
setTimeout(()=>{console.log('timeout')},100)

// 4 2 3 1

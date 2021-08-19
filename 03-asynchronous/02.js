// Promise 方式的 AJAX

function ajax (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

const promise2 = ajax('/api/users.json').then(function (res) {
  console.log(res)
}, function (error) {
  console.log(error)
})
console.log(promise2)

// 嵌套使用 Promise 是最常见的误区
// ajax('/api/urls.json').then(function (urls) {
//   ajax(urls.users).then(function (users) {
//     ajax(urls.users).then(function (users) {
//       ajax(urls.users).then(function (users) {
//         ajax(urls.users).then(function (users) {
//           // ……
//         })
//       })
//     })
//   })
// })



setTimeout(() => {
  console.log('timeout')
})

fetch('./api/posts.json')
  .then(r => r.json())
  .then(s => {
    console.log(s)
  })
  
setTimeout(() => {
  console.log('timeout')
}, 3000)

// function ajax(url) {
//   return new Promise(function (resolve, reject) {
//     // foo()
//     // throw new Error()
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.responseType = 'json'
//     xhr.onload = function () {
//       if (this.status === 200) {
//         resolve(this.response)
//       } else {
//         reject(new Error(this.statusText))
//       }
//     }
//     xhr.send()
//   })
// }

// setTimeout(()=>{
//   console.log('timeout')
// })

// ajax('./api/posts.json').then((s)=>{
//   console.log(s)
// })
// setTimeout(()=>{
//   console.log('timeout')
// },200)
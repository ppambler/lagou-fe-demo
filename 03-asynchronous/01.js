// // Promise 基本示例

// const promise = new Promise(function (resolve, reject) {
//   // 这里用于“兑现”承诺

//   resolve(100) // 承诺达成

//   // reject(new Error('promise rejected')) // 承诺失败
//   console.log(1)
// })

// promise.then(function (value) {
//   // 即便没有异步操作，then 方法中传入的回调仍然会被放入队列，等待下一轮执行
//   console.log('resolved ->', value)
// }, function (error) {
//   console.log('rejected ->', error)
// })

// console.log('end')

const shop = true
const promise = new Promise((resolve,reject)=>{
  console.log('你老爸我去买电脑了')
  setTimeout(()=>{
    if(shop) {
      resolve('儿子，你的电脑来了')
    }else{
      reject('对不起，儿子，门店没开门……')
    }
  },2000)
})

promise.then((res)=>{
  console.log(res)
  console.log('我很开心')
},(error)=>{
  console.log(error)
  console.log('我很失落')
})


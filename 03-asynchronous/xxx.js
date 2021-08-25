new Promise((resolve, reject) => {
  reject('error')
}).then((s) => { }, (e) => { console.log('then1', e) })
  .catch((e) => { console.log('catch', e) })



console.log(res)
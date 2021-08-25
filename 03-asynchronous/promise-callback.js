// Promise vs. Callback

function ajax(url, callback) {
  const executor = (resolve, reject) => {
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
  }

  if (typeof callback === 'function') {
    // support callback
    executor(
      res => callback(null, res),
      err => callback(err)
    )
    return ajax
  }

  return new Promise(executor)
}

// sync mode code
try {
  const value1 = ajax('/api/posts6.json', (error, r2) => {
    if (error) {
      console.log('错误原因：')
      return console.error(error)
    }
    console.log('callback', r2)
   }
  )
  console.log(value1)
  const value2 = ajax('/api/urls.json').then((s) => { console.log(s) })
  console.log(value2)
  const value3 = ajax('/api/users.json').then((s) => { console.log(s) })
  console.log(value3)
  const value4 = ajax('/api/xxx.json').then((s) => { console.log(s) })
  console.log(value4)
} catch (e) {
  console.error(e)
}
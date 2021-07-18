// 记忆函数
const _ = require('lodash')

function getArea (r) {
  console.log(r)
  return Math.PI * r * r
}

let getAreaWithMemory = _.memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4)) 
console.log(getAreaWithMemory(4))

// 4
// 50.26548245743669

// 50.26548245743669 
// 50.26548245743669

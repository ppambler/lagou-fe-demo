console.log('index.js')
import waiting from "./waiting.js";
import xxx from "./normal.js";
console.log(1)
setTimeout(()=>{
  console.log('timeout')
},200)
console.log(waiting)
waiting.then((s)=>{
  console.log(s)
})
console.log(xxx)

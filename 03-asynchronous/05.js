console.log('start')
new Promise((xxx,yyy)=>{
  console.log('loading……')
  setTimeout(() => {
    console.log('timer1')
    xxx('timer1')
  }, 0);
}).then((res)=>{
  console.log('then1')
  setTimeout(() => {
    console.log('timer2')
  }, 0);
}).then((res)=>{
  console.log('then2')
  setTimeout(() => {
    console.log('timer3')
  }, 0);
}).then((res)=>{
  console.log('then3')
  setTimeout(() => {
    console.log('timer4')
  }, 0);
})
console.log('end')



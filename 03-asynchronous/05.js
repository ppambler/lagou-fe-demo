new Promise((xxx,yyy)=>{
  setTimeout(() => {
    console.log('timer1')
    xxx('timer1')
  }, 1000);
}).then((res)=>{
  console.log('then1')
  setTimeout(() => {
    console.log('timer2')
  }, 1000);
}).then((res)=>{
  console.log('then2')
  setTimeout(() => {
    console.log('timer3')
  }, 1000);
}).then((res)=>{
  console.log('then3')
  setTimeout(() => {
    console.log('timer4')
  }, 1000);
})
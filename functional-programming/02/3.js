// 面向过程的方式
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 高阶高阶函数
let array = [1, 2, 3, 4];
forEach(array, (item) => {
  console.log(item);
});
let r = filter(array, (item) => {
  return item % 2 === 0;
});

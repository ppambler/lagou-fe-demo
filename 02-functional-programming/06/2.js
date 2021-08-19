// 函数组合演示



function compose(f, g) {
  return function (value) {
    return f(g(value));
  };
}

function reverse(array) {
  return array.reverse();
}

function first(array) {
  return array[0];
}




const last = compose(first, reverse);

console.log(last([1, 2, 3, 4])); // 4











// console.log(arr[arr.length-1])









// function last(arr) {
//   return arr[arr.length-1]
// }

// let arr = [1,2,3,4]
// console.log(last(arr)) // 4
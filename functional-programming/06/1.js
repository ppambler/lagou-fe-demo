var numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc));
function myFunc(total, num) {
  console.log(total)
  console.log(num)
  return total - num;
}
// console.log(Math.pow(4, 2));
// console.log(Math.pow(5, 3));
// console.log(Math.pow(6, 4));

// function makePower(power) {
//   return function (number) {
//     return Math.pow(number, power);
//   };
// }

// // 求平方
// let power2 = makePower(2);
// let power3 = makePower(3);

// console.log(power2(4)); // 16
// console.log(power2(5)); // 15
// console.log(power3(4)); // 64

// // getSalary(12000, 2000)
// // getSalary(15000, 3000)
// // getSalary(15000, 4000)

// function makeSalary(base) {
//   return function (performance) {
//     return base + performance;
//   };
// }

// let salaryLevel1 = makeSalary(12000);
// let salaryLevel2 = makeSalary(15000);

// console.log(salaryLevel1(2000)); // 14000
// console.log(salaryLevel2(3000)); // 18000

// function outer() {
//   let out = '666'
//   setTimeout(()=>{
//     console.log(out)
//   })
// }

let obj = function () {
  let i = 0;

  return {
    setI(k) {
      i = k;
    },

    getI() {
      return i;
    },
  };
};

let x = obj();

console.log(x);

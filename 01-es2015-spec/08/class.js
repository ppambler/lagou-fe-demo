// function Person (name) {
//   this.name = name
// }

// Person.prototype.say = function () {
//   console.log(`hi, my name is ${this.name}`)
// }


// class Person {
//   constructor (name) {
//     this.name = name
//   }

//   say () {
//     console.log(`hi, my name is ${this.name}`)
//   }
// }

// const p = new Person('tom')
// console.log(p.__proto__)
// p.say()

class A {
  name = 'zce'
  sayArrow = () => {
    console.log(this)
  }
  sayFunction = function() {
    console.log(this)
  }
}

let a = new A()
a.sayArrow()
a.sayFunction()
console.log(a)
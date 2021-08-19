let obj = { name: "zce", age: 18, hobby: ['打 LOL'] };
console.log(Object.entries(obj));
console.log(Object.fromEntries(Object.entries(obj)));

let o = Object.fromEntries(Object.entries(obj))
console.log(obj === o)
console.log(obj.hobby === o.hobby)

// [ [ 'name', 'zce' ], [ 'age', 18 ], [ 'hobby', [ '打 LOL' ] ] ]
// { name: 'zce', age: 18, hobby: [ '打 LOL' ] }
// false
// true
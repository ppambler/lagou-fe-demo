const _ = require("lodash");

// _.split()
const split = _.curry((sep, str) => _.split(str, sep));

// _.toLower()
const join = _.curry((sep, array) => _.join(array, sep));

// const log = (v) => {
//   console.log(v);
//   return v;
// };

const trace = _.curry((tag, value) => {
  console.log(tag, value);
  return value;
});

const map = _.curry((fn, array) => _.map(array, fn));
const f = _.flowRight(
  join("-"),
  trace("after map"),
  map(_.toLower),
  trace("after split"),
  split(" ")
);
console.log(f("NEVER SAY DIE"));

// after split [ 'NEVER', 'SAY', 'DIE' ]
// after map [ 'never', 'say', 'die' ]
// never-say-die

// [ 'NEVER', 'SAY', 'DIE' ]
// [ 'never', 'say', 'die' ]
// never-say-die

// [ 'NEVER', 'SAY', 'DIE' ]
// never,say,die
// n-e-v-e-r-,-s-a-y-,-d-i-e

// console.log([ 'NEVER', 'SAY', 'DIE' ].toString().toLowerCase())
// console.log(Array.from('never,say,die'))
// console.log(Array.from('never,say,die').join('-'))

// never,say,die
// [
//   'n', 'e', 'v', 'e',
//   'r', ',', 's', 'a',
//   'y', ',', 'd', 'i',
//   'e'
// ]
// n-e-v-e-r-,-s-a-y-,-d-i-e

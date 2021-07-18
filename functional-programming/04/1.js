function memoize(f) {
  let cache = {};
  return function () {
    let arg_str = JSON.stringify(arguments);
    console.log(arg_str);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    console.log(cache);
    return cache[arg_str];
  };
}

function getArea(r) {
  return Math.PI * r * r;
}
let getAreaWithMemory = memoize(getArea);
console.log('------')
console.log(getAreaWithMemory(4));
console.log('------')
console.log(getAreaWithMemory(5));
console.log('------')
console.log(getAreaWithMemory(6));

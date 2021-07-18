// Either 函子
class Left {
  static of(value) {
    return new Left(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return this;
  }
}

class Right {
  static of(value) {
    return new Right(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Right.of(fn(this._value));
  }
}

// let r1 = Right.of(12).map((x) => x + 2);
// let r2 = Left.of(12).map((x) => x + 2);

// console.log(r1);
// console.log(r2);

// Right { _value: 14 }
// Left { _value: 12 }

function parseJSON(str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (e) {
    return Left.of({ error: e.message });
  }
}

// let r = parseJSON('{ name: zs }')
// console.log(r)

// let r1 = parseJSON('{ "name": "zs" }')
// console.log(r1)

// Left { _value: { error: 'Unexpected token n in JSON at position 2' } }
// Right { _value: { name: 'zs' } }


let r = parseJSON('{ name: zs }').map((x) => x.name.toUpperCase())
console.log(r)
let r1 = parseJSON('{ "name": "zs" }').map((x) => x.name.toUpperCase());
console.log(r1);

// Left { _value: { error: 'Unexpected token n in JSON at position 2' } }
// Right { _value: 'ZS' }

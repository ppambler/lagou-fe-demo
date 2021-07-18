// 结合律（associativity）
let f = compose(f, g, h);
let associative = compose(compose(f, g), h) == compose(f, compose(g, h));
// true

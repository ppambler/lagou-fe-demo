



// lodash 模块
const _ = require("lodash");
_.map(["a", "b", "c"], _.toUpper);
// => ['A', 'B', 'C']
_.map(["a", "b", "c"]);
// => ['a', 'b', 'c']
_.split("Hello World", " ");


// lodash/fp 模块
const fp = require("lodash/fp");
fp.map(fp.toUpper, ["a", "b", "c"]);
fp.map(fp.toUpper)(["a", "b", "c"]);
fp.split(" ", "Hello World");
fp.split(" ")("Hello World");




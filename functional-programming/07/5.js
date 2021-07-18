const Right = (value) => ({
  map: (fn) => Right(fn(value)),
  catch: () => Right(value),
  value,
});

const Left = (value) => ({
  map: (fn) => Left(value),
  catch: (fn) => Right(fn(value)),
  value,
});

// 高阶函数
const tryCatch = (fn) => (value) => {
  try {
    return Right(fn(value)); // everything went fine we go right
  } catch (error) {
    return Left(error); // oops there was an error let's go left.
  }
};

const validateEMail = tryCatch((value) => {
  if (!value.match(/\S+@\S+\.\S+/)) {
    throw new Error("The given email is invalid");
  }
  return value;
});

// 闭包
const get = (key) => (value) => value[key];

let r = validateEMail("foo@example.com")
  .map((v) => "Email: " + v)
  .catch(get("message")).value;

console.log(r); // 'Email: foo@example.com'

let r1 = validateEMail("foo@example")
  .map((v) => "Email: " + v)
  .catch(get("message")).value;
console.log(
  typeof validateEMail("foo@example").map((v) => "Email: " + v).value
); // 'object'
console.log(new Error("The given email is invalid").message); // "The given email is invalid"
// 把 get('message') 看作是：盒子里边的值是对象，拿到该对象的 message 属性值，并把该值作为新盒子的 value 值
console.log(r1); // 'The given email is invalid'

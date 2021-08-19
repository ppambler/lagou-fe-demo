// const get = (key) => (value) => value[key];

// const validateEmail = (value) => {
//   if (!value.match(/\S+@\S+\.\S+/)) {
//     throw new Error("The given email is invalid");
//   }
//   return value;
// };

// // validateEmail("foo@example.com"); // 'foo@example.com'
// // validateEmail("foo@example"); // throw Error('The given email is invalid')

// const validateEmail = (value) => {
//   if (!value.match(/\S+@\S+\.\S+/)) {
//     return Left(new Error("The given email is invalid"));
//   }
//   return Right(value);
// };

// const Left = (value) => ({
//   map: (fn) => Left(value),
//   value,
// });

// Left(5).map((v) => v * 2).value; // 5

// const Right = (value) => ({
//   map: (fn) => Right(fn(value)),
//   value,
// });

// Right(5).map((v) => v * 2).value; // 10

// let r = validateEmail("foo@example.com") // valid email, return Right functor
//   .map((v) => "Email: " + v).value; // 'Email: foo@example.com'
// console.log(r);
// let r1 = validateEmail("foo@example") // invalid email, return Left functor
//   .map((v) => "Email: " + v).value; // Error('The given email is invalid')

// console.log(r1);

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

const tryCatch = (fn) => (value) => {
  try {
    return Right(fn(value)); // everything went fine we go right
  } catch (error) {
    return Left(error); // oops there was an error let's go left.
  }
};

const validateEmail = tryCatch((value) => {
  if (!value.match(/\S+@\S+\.\S+/)) {
    throw new Error("The given email is invalid");
  }
  return value;
});

const get = (key) => (value) => value[key];

validateEMail("foo@example.com")
  .map((v) => "Email: " + v)
  .catch(get("message")).value; // 'Email: foo@example.com'
validateEMail("foo@example")
  .map((v) => "Email: " + v)
  .catch(get("message")).value; // 'The given email is invalid'

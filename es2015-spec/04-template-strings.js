// const str = `hello es2015, this is a \`string\``
// console.log(str) // hello es2015, this is a `string`
// // const str0 = '
// //   hello
// //   es2015
// // '

// const str1 = 'hello\nes2015'
// console.log(str1)

// const str2 = `
//   hello
//   es2015
// `
// console.log(str2)

// const name = 'tom'
// // 可以通过 ${} 插入表达式，表达式的执行结果将会输出到对应位置
// const msg = `hey, ${name} --- ${{}} ---- ${Math.random()}`
// console.log(msg) // hey, tom --- [object Object] ---- 0.917980068205263

// const str = console.log`hello world` // [ 'hello world' ]

// const name = "tom";
// const gender = true;
// function myTagFunc(strings, name, gender) {
//   const sex = gender ? "man" : "woman";
//   return strings[0] + name + strings[1] + sex + strings[2];
// }

// const result = myTagFunc`hey, ${name} is a ${gender}.`;
// console.log(result); // hey, tom is a man.

// var sender = '<script>alert("abc")</script>'; // 恶意代码
// var message = SaferHTML`<p>${sender} has sent you a message.</p>`;

// function SaferHTML(templateData) {
//   var s = templateData[0];
//   for (var i = 1; i < arguments.length; i++) {
//     var arg = String(arguments[i]);

//     // Escape special characters in the substitution.
//     s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

//     // Don't escape special characters in the template.
//     s += templateData[i];
//   }
//   return s;
// }

// console.log(message)

// const message = "Error: foo is not defined.";

// console.log(message.includes("foo")); // true

//最常用的就是在vue中写一个模板的时候，方便多了

// const template = `
//     <div class="box">
//         <p>hello</>
//     </div>
// `;
// console.log(template)

// import { oneLine } from "common-tags";

// oneLine`
//   foo
//   bar
//   baz
// `;
// // "foo bar baz"

// i18n`Welcome to ${siteName}, you are visitor number ${visitorNumber}!`;
// // "欢迎访问xxx，您是第xxxx位访问者！"

// console.log('start')
// let html = `
// <ul>
//   <li>This is list item 1</li>
//   <li>This is list item 2</li>
// </ul>`;
// console.log(html)
// console.log('end')

// let word = "world";
// let str = `hello, ${word
//   .split("")
//   .map((c) => `(${c})`)
//   .join("")}`;
// // hello, (w)(o)(r)(l)(d)
// console.log(str)
// function zip(a, b) {
//   let acc = [];
//   for (let i = 0, l = Math.max(a.length, b.length); i < l; i++) {
//     acc.push([a[i], b[i]]);
//   }
//   return acc;
// }
// function reverseWords(strings, ...args) {
//   let numArgs = args.length;
//   return zip(strings, args)
//     .map(([literal, val], idx) => `${literal}${idx < numArgs ? val : ""}`)
//     .join(" ")
//     .split(/\s+/)
//     .map((_, idx, arr) => arr[arr.length - idx - 1])
//     .join(" ");
// }
// let foxColor = "brown";
// let dogEnergy = "lazy";
// let s = reverseWords`The quick ${foxColor} fox jumped over the
//     ${dogEnergy} dog`;
// // "dog lazy the over jumped fox brown quick The"

// console.log(s);

function zip(a, b) {
  let acc = [];
  for (let i = 0, l = Math.max(a.length, b.length); i < l; i++) {
    acc.push([a[i], b[i]]);
  }
  return acc;
}

function sql(strings, ...args) {
  let numArgs = args.length;
  return zip(strings, args).reduce(
    (acc, [literal, arg], idx) => {
      acc.sql += literal;
      if (idx < numArgs) {
        acc.sql += "?";
        acc.binds.push(arg);
      }
      return acc;
    },
    { sql: "", binds: [] }
  );
}

let salary = 60000;
let companyId = 1234;

let preparedSql = sql`
SELECT employeeId
  FROM employees
 WHERE companyId = ${companyId}
   AND annualSalary > ${salary}
`;

console.log(preparedSql.sql);
console.log(preparedSql.binds);

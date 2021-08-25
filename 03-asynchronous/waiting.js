// fetch request
console.log('waiting.js')
const posts = fetch('./api/posts.json')
  .then(response => response.json());
// let i = 0
// while (i < 100) {
//   console.log(i)
//   i++
// }
// export default await posts;
export default posts;
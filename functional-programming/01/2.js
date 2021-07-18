// 把函数赋值给变量
let fn = function () {
  console.log("Hello First-class Function");
};
fn();
// 一个示例

const Views = {
  index(posts) {},
  show(post) {},
}
const Db = {
  create(attrs){},
  update(post, attrs){},
  destroy(post){}
}
const BlogController = {
  index(posts) {
    return Views.index(posts);
  },
  show(post) {
    return Views.show(post);
  },
  create(attrs) {
    return Db.create(attrs);
  },
  update(post, attrs) {
    return Db.update(post, attrs);
  },
  destroy(post) {
    return Db.destroy(post);
  },
};
// 优化
const BlogController = {
  index: Views.index,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy,
};

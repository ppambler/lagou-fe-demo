// 定义三种状态
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECT = 'REJECT';
let n = 1
let m = 1

class MyPromise {
  constructor(fn) {
    console.log('-------构造 Promise 实例 start-------')
    console.log('init status、value 的状态')
    // 初始化状态
    this.status = PENDING;
    // 将成功、失败的结果放在this上，便于then、catch访问
    this.value = null;
    this.reason = null;

    // 成功态、失败态回调函数队列，同步调用then时将对应态的函数注册进去, 在状态变更的时候调用
    console.log('init 成功态/失败态 回调函数队列')
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    console.log('声明 resolve/reject 函数')
    const resolve = (value) => {
      console.log('resolve start')
      console.log('resolve-----this',this)
      if (this.status === PENDING) {
        console.log('更改 promise.then() 这个 promise 的状态和结果')
        this.status = FULFILLED;
        this.value = value;
        // 成功态回调函数依次执行
        console.log('遍历 fulfilled 成功回调队列，看看有没有要调用 fulfilled 函数……')
        this.onFulfilledCallbacks.forEach(fn => fn(this.value))
        console.log(m,'没有 fulfilled 函数，调用 resolve 结束')
        m ++;
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECT;
        this.reason = reason;
        // 失败态回调函数依次执行
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
    // 生成实例后立即调用fn
    // 把内部的resolve和reject传入fn，用户可调用resolve和reject
    try {
      console.log('调用传给 new Promise(fn) 的 fn，两个实参是 resolve、reject')
      fn(resolve, reject);
    } catch (err) {
      // fn执行出错，将错误内容用reject抛出去
      reject(err)
    }
    console.log('-------构造 Promise 实例 end-------')
  }
  then(onFulfilled, onReject) {
    console.log('then 执行开始')
    // 实现值穿透 当then中传入的不是函数，则这个promise返回上一个promise的值
    console.log('判断传入的回调 onFulfilled/onReject 是否是个函数')
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onReject = typeof onReject === 'function' ? onReject : reason => { throw new Error(reason) }

    // 保存前一个promise的this
    const self = this;
    return new MyPromise((resolve, reject) => {
      this.abcd = '标识'
      console.log('@@@@@@@ then fn start @@@@@@@')
      // 封装前一个promise成功时执行的函数
      console.log('then 返回了一个 Promise，该 Promise 的函数参数开始同步执行')
      console.log('声明一个 fulfilled 函数')
      let fulfilled = () => {
        console.log('有 fulfilled 函数')
        console.log('1111111111',this)
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$ fulfilled 执行 $$$$$$$$$$$$$$$$$$$$$$$$')
        console.log('调用 then 的第一个参数 onFulfilled，并且把这个 promise 的结果传给该回调函数')
        try {
          const result = onFulfilled(self.value); // 承前
          console.log('拿到 onFulfilled 的返回值 p2')
          console.log('如果 p2 是一个 Promise 实例，那就继续 p2.then()，并把下一个 then 的参数 onFulfilled、onReject 作为 p2.then() 的两个实参')
          console.log('如果 p2 不是，那就调用 resolve(p2)')
          n ++;
          let res = result instanceof MyPromise ? result.then(resolve, reject) : resolve(result); //启后
          console.log('$$$$$$$$$$$$$$$$$$$$$$$$ fulfilled 调用结束 $$$$$$$$$$$$$$$$$$$$$$$$')
          return res
        } catch (err) {
          reject(err)
        }
      }
      console.log('声明一个 rejected 函数')
      // 封装前一个promise失败时执行的函数
      let rejected = () => {
        try {
          const result = onReject(self.reason);
          return result instanceof MyPromise ? result.then(resolve, reject) : reject(result);
        } catch (err) {
          reject(err)
        }
      }
      console.log('判断承诺的状态')
      switch (self.status) {
        case PENDING:
          console.log('为 PENDING 态，把 fulfilled/rejected 加入到 成功/失败 回调队列中…')
          self.onFulfilledCallbacks.push(fulfilled);
          self.onRejectedCallbacks.push(rejected);
          break;
        case FULFILLED:
          console.log('为 FULFILLED 态，直接调用 fulfilled')
          fulfilled();
          break;
        case REJECT:
          console.log('为 REJECT 态，直接调用 rejected')
          rejected();
          break;
      }
      console.log('then 执行结束了，返回了一个 Promise 实例')
      console.log('@@@@@@@ then fn end @@@@@@@')
    })
  }

  // Promise.prototype.catch就是Promise.prototype.then(null, onRejected)的别名
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    console.log('Promise 的静态 resolve 方法被调用了吗？')
    // 如果是promise实例，直接返回
    if (value instanceof MyPromise) {
      return value;
    } else {
      // 如果不是promise实例，返回一个新的promise对象，状态为fulfilled
      return new MyPromise((resolve, reject) => resolve(value))
    }
  }
  static reject(reason) {
    // Promise.reject方法的参数会原封不动地作为reject的参数
    return new MyPromise((resolve, reject) => reject(reason))
  }

  /**
   * Promise.all() 接受一个数组，返回一个promise对象
   *    所有的promise状态变为FULFILLED，返回的promise状态才变为FULFILLED。
   *     一个promise状态变为REJECTED，返回的promise状态就变为REJECTED。
   *    数组成员不一定都是promise，需要使用Promise.resolve()处理。
   */
  static all(promiseArr) {
    const len = promiseArr.length;
    const values = new Array(len);

    let count = 0; // 记录已经成功的promise个数
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        // Promise.resolve()处理，确保每一个都是promise实例
        MyPromise.resolve(promiseArr[i]).then(
          val => {
            values[i] = val;
            count++;
            if (count === len) resolve(values); // 如果全部执行完，改变promise的状态为FulFilled
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }
  static race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      promiseArr.forEach(item => {
        MyPromise, resolve(item).then(
          val => resolve(val),
          err => reject(err)
        )
      })
    })
  }
}
console.log('******* 第一轮代码 start *******')
const shop = true
const promise = new MyPromise((resolve, reject) => {
  console.log('---------- fn start ------------')
  console.log('你老爸我去买电脑了')
  console.log('启动指令，开启倒计时……')
  setTimeout(() => {
    console.log('******* 第二轮代码 start *******')
    if (shop) {
      console.log('>= 2s 过去了...')
      console.log(n,'调用 resolve')
      resolve('儿子，你的电脑来了')
    } else {
      reject('对不起，儿子，门店没开门……')
    }
    console.log('******* 第二轮代码 end *******')
  }, 2000)
  console.log('---------- fn end ------------')
})

const xxx = promise.then((res) => {
  console.log('----------then1------------')
  console.log('onFulfilled start')
  console.log(res)
  console.log('我很开心')
  console.log('这个 then 没有返回 Promise')
  console.log('onFulfilled end')
  console.log('----------then1------------')
}, (error) => {
  console.log(error)
  console.log('我很失落')
}).then((res)=>{})
console.log(xxx)
console.log('******* 第一轮代码 end *******')

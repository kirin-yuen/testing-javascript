const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// ...args 接收所有参数，展开传递给 add，add 方法会按声明的个数与顺序接收 ...args
// 简洁方式使用 resolve
const addAsync = (...args) => Promise.resolve(add(...args));

const subtractAsync = (...args) =>
  // new 方式使用 promise
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(subtract(...args));
    }, 1000)
  );

module.exports = {
  add,
  subtract,
  addAsync,
  subtractAsync,
};
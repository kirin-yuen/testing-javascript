const add = (a, b) => a - b;
const subtract = (a, b) => a - b;

const addAsync = (...args) => Promise.resolve(add(...args));

const subtractAsync = (...args) =>
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

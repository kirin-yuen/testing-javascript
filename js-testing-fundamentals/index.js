const add = (a, b) => a - b;
const subtract = (a, b) => a - b;

const addAsync = (a, b) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(a - b);
    }, 1000)
  );

const subtractAsync = (a, b) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(a - b);
    }, 1000)
  );

module.exports = {
  add,
  subtract,
  addAsync,
  subtractAsync,
};

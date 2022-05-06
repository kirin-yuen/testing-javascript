// Throw an Error with a Simple Test in JavaScript
// 简单测试函数

const { add, subtract } = require("../index");

let result = add(3, 5);
let expected = 8;

if (result !== expected) {
  throw new Error(`add: ${result} is not equal to ${expected}`);
}

result = subtract(8, 5);
expected = 3;

if (result !== expected) {
  throw new Error(`subtract: ${result} is not equal to ${expected}`);
}

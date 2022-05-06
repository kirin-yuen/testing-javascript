// Abstract Test Assertions into a JavaScript Assertion Library
// 简单封装断言方法

const expect = (result) => {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
};

const { add } = require("../index");

let result = add(3, 5);
let expected = 8;

expect(result).toBe(expected);

// Encapsulate and Isolate Tests by building a JavaScript Testing Framework
// 封装独立测试的类库

const test = (title, callback) => {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(`${error}\n`);
  }
};

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

test("should add result correct", () => {
  let result = add(3, 5);
  let expected = 8;

  expect(result).toBe(expected);
});

test("should add result correct", () => {
  let result = add(1, 5);
  let expected = 8;

  expect(result).toBe(expected);
});

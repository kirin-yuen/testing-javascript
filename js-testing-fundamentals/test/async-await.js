// Support Async Tests with JavaScripts Promises through async await
// 支持异步测试

const { addAsync, subtractAsync } = require("../index");

const test = async (title, callback) => {
  try {
    await callback();
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

test("should addAsync result correct", async () => {
  const result = await addAsync(3, 5);

  expect(result).toBe(8);
});

test("should subtractAsync result correct", async () => {
  const result = await subtractAsync(8, 5);

  expect(result).toBe(3);
});

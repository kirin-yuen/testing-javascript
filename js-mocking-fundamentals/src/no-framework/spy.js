// Restore the Original Implementation of a Mocked JavaScript Function with jest
// 模拟 jest.spy 写法

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

// 模拟 jest.fn，参数传递一个待实现的方法
const fn = (mockImplFun = () => {}) => {
  // 返回的函数会接收到模块实际调用的参数
  const mockFun = (...args) => {
    // 每次调用将参数放到 mock 属性的 calls 数组里
    mockFun.mock.calls.push(args);

    return mockImplFun(...args);
  };

  mockFun.mock = { calls: [] }; // 模拟 jest.fn 结构，将每次调用参数放到这里
  // 将 spyOn 后收到 mockImplementation 参数的实现方法替换当前方法
  mockFun.mockImplementation = (newImpl) => (mockImplFun = newImpl);

  return mockFun;
};

// 模拟 jest.spyOn
const spyOn = (obj, props) => {
  // 保存原有的方法
  const originalFn = obj[props];

  // 模拟方法赋值
  obj[props] = fn();

  // 重置原来的方法
  obj[props].mockRestore = () => {
    obj[props] = originalFn;
  };
};

// 追踪 utils.getWinner
spyOn(utils, "getWinner");
// 使用 spyOn 后的 mockImplementation 改写 getWinner 方法，总是返回 p2
utils.getWinner.mockImplementation((p1, p2) => p2);

const winner = thumbWar("Allen", "Kirin");

// 执行测试后，测试会一直通过
assert.strictEqual(winner, "Kirin");

// 由于总是返回 p2，因此会调用两次，并且参数都是固定，两个数组元素
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Allen", "Kirin"],
  ["Allen", "Kirin"],
]);

// 使用 spyOn 后的 mockRestore 复原
utils.getWinner.mockRestore();

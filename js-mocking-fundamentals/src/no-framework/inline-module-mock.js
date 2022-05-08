// Mock a JavaScript module in a test
// 模拟 jest.mock 写法

// 模拟 jest.fn，参数传递一个待实现的方法
const fn = (mockImplFun = () => {}) => {
    // 返回的函数会接收到模块实际调用的参数
    const mockFun = (...args) => {
        // 每次调用将参数放到 mock 属性的 calls 数组里
        mockFun.mock.calls.push(args);

        return mockImplFun(...args);
    };

    mockFun.mock = {
        calls: []
    }; // 模拟 jest.fn 结构，将每次调用参数放到这里
    // 将 spyOn 后收到 mockImplementation 参数的实现方法替换当前方法
    mockFun.mockImplementation = (newImpl) => (mockImplFun = newImpl);

    return mockFun;
};

// 获取 cache 的 key（路径）
const utilsPath = require.resolve("../utils");
// 自定义模块内容
require.cache[utilsPath] = {
    id: utilsPath,
    filename: utilsPath,
    exports: {
        getWinner: fn((p1, p2) => p2)
    },
    loaded: true
}

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Allen", "Kirin");

// 执行测试后，测试会一直通过
assert.strictEqual(winner, "Kirin");

// 由于总是返回 p2，因此会调用两次，并且参数都是固定，两个数组元素
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ["Allen", "Kirin"],
    ["Allen", "Kirin"],
]);

// 清除缓存，避免其他引入该模块的受到干扰
delete require.cache[utilsPath]
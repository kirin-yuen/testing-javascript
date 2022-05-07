// Override Object Properties to Mock with Monkey-patching in JavaScript
// 程序上重写方法，结束后复原

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;

// 改写 getWinner 方法，总是返回 p2
utils.getWinner = (p1, p2) => p2;

const winner = thumbWar("Allen", "Kirin");

// 执行测试后，测试会一直处于不通过
assert.strictEqual(winner, "Allen");

// 测试完成后进行复原，避免影响其他模块使用
utils.getWinner = originalGetWinner;

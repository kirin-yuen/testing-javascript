// Make a shared JavaScript mock module
// 模拟 __mocks__ 写法，全局 mock

require('../__no-framework-mocks__/utils') // 先引入一次，让缓存先存在
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Allen', 'Kirin')
assert.strictEqual(winner, 'Allen')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
    ['Allen', 'Kirin'],
    ['Allen', 'Kirin']
])

// cleanup
delete require.cache[utilsPath]
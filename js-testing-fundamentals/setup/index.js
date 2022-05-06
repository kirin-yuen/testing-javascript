// 配置文件，导出变量
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

// 全局导出
// npm run global-test，通过引入配置文件中的全局变量后，所有运行的文件都可直接使用 test 与 expect
global.test = test;
global.expect = expect;
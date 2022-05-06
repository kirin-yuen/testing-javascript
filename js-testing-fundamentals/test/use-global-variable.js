// Provide Testing Helper Functions as Globals in JavaScript
const { addAsync, subtractAsync } = require("../index");

// test 与 expect 都是使用命令行中引入的配置文件 setup/index.js 的全局变量
// npm run global-test，通过引入配置文件中的全局变量后，所有运行的文件都可直接使用 test 与 expect
test("should addAsync result correct", async () => {
    const result = await addAsync(3, 5);

    expect(result).toBe(8);
});

test("should subtractAsync result correct", async () => {
    const result = await subtractAsync(8, 5);

    expect(result).toBe(3);
});
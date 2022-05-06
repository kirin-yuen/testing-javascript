// Verify Custom JavaScript Tests with Jest
// 使用 jest 框架文件需要是 xxx.test.js 或 xxx.spec.js 格式
// 命令行可使用 npx jest，或 package.json 里的 npm run test
const { addAsync, subtractAsync } = require("../index");

test("should addAsync result correct", async () => {
    const result = await addAsync(3, 5);

    expect(result).toBe(8);
});

test("should subtractAsync result correct", async () => {
    const result = await subtractAsync(8, 5);

    expect(result).toBe(3);
});
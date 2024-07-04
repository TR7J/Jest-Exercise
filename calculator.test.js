// calculator.test.js
const { add, subtract } = require("./calculator");

test("adds 2 + 4 to equal 6", () => {
  expect(add(2, 4)).toBe(6);
});

test("subtracts 7 - 1 to equal 6", () => {
  expect(subtract(7, 1)).toBe(6);
});

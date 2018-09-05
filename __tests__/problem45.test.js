import jump from "@/problem45";

test("Jump Game II", () => {
  expect(jump([0])).toBe(0);
  expect(jump([1, 5])).toBe(1);
  expect(jump([2, 3, 1, 1, 4])).toBe(2);
  expect(jump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4])).toBe(16);
});

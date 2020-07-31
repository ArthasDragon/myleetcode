import climbStairs from "@/problem70";

test("Climbing Stairs", () => {
  expect(climbStairs(5)).toBe(8);
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
});

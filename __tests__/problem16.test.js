import threeSumClosest from "@/problem16";

test("3Sum Closest", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 3)).toBe(2);
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
});

import numTrees from "@/problem96";

test("Unique Binary Search Trees", () => {
  expect(numTrees(3)).toBe(5);
  expect(numTrees(19)).toBe(1767263190);
});

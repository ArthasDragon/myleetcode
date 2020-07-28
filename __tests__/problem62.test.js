import uniquePaths from "@/problem62";

test("Unique Paths", () => {
  expect(uniquePaths(3, 2)).toEqual(3);
  expect(uniquePaths(7, 3)).toEqual(28);
});

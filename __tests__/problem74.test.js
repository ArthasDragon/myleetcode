import searchMatrix from "@/problem74";

test("Search a 2D Matrix", () => {
  expect(searchMatrix([[1, 3]], 2)).toBeFalsy();
  expect(
    searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
  ).toBeTruthy();
  expect(searchMatrix([[1, 1, 1, 1, 1, 1, 1, 1, 1]], 1)).toBeTruthy();
});

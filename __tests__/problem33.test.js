import search from "@/problem33";

test("Search in Rotated Sorted Array", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

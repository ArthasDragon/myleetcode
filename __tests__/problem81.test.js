import search from "@/problem81";

test("Search in Rotated Sorted Array II", () => {
  expect(
    search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
  ).toBeTruthy();
});

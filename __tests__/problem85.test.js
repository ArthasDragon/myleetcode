import maximalRectangle from "@/problem85";

test("Maximal Rectangle", () => {
  expect(maximalRectangle([["0"]])).toBe(0);
  expect(
    maximalRectangle([
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"]
    ])
  ).toBe(6);
});

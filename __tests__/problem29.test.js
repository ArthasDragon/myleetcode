import divide from "@/problem29";

test("Divide Two Integers", () => {
  expect(divide(10, 3)).toBe(3);
  expect(divide(2147483648, 1)).toBe(2147483647);
});

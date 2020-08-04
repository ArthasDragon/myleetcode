import minDistance from "@/problem72";

test("Edit Distance", () => {
  expect(minDistance("horse", "ros")).toBe(3);
  expect(minDistance("intention", "execution")).toBe(5);
});

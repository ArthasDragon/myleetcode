import mySqrt from "@/problem69";

test("Sqrt(x)", () => {
  expect(mySqrt(0)).toBe(0);
  expect(mySqrt(3)).toBe(1);
  expect(mySqrt(4)).toBe(2);
});

import myPow from "@/problem50";

test("Pow(x, n)", () => {
  expect(myPow(2.0, 10)).toBe(1024);
  expect(myPow(2.0, -10)).toBe(1 / 1024);
});

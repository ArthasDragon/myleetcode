import trap from "@/problem42";
import testMock from "@constant/test42";

test("Trapping Rain Water", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(
    trap([
      0,
      1,
      0,
      2,
      1,
      0,
      1,
      3,
      2,
      1,
      2,
      1,
      50,
      1,
      56,
      3215,
      651321,
      6451,
      215,
      5468
    ])
  ).toBe(6313);
  expect(trap(testMock)).toBe(174801674);
});

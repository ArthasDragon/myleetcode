import isMatch from "@/problem44";

test("Wildcard Matching", () => {
  expect(isMatch("", "**")).toBeTruthy();
  expect(isMatch("", "")).toBeTruthy();
  expect(isMatch("abc", "")).toBeFalsy();
  expect(isMatch("aab", "c*a*b")).toBeFalsy();
  expect(isMatch("aaabb", "*a*?b")).toBeTruthy();
  expect(isMatch("aaabb", "*a*?bc")).toBeFalsy();
});

import isMatch from "@/problem44";

test("Wildcard Matching", () => {
  expect(isMatch("", "**")).toBeTruthy();
  expect(isMatch("", "")).toBeTruthy();
  expect(isMatch("aaabb", "*a*b")).toBeTruthy();
});

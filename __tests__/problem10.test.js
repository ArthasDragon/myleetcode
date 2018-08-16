import isMatch from "@/problem10";

test("Regular Expression Matching", () => {
  expect(isMatch("", "")).toBeTruthy();
  expect(isMatch("abcd", "abcd")).toBeTruthy();
  expect(isMatch("abcd", "a.*")).toBeTruthy();
  expect(isMatch("abcd", ".*")).toBeTruthy();
  expect(isMatch("aaabbcddd", "a*b*c.*")).toBeTruthy();
  expect(isMatch("", "a")).toBeFalsy();
  expect(isMatch("a", "")).toBeFalsy();
});

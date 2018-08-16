import isValid from "@/problem20";

test("Valid Parentheses", () => {
  expect(isValid("()")).toBeTruthy();
  expect(isValid("()[]")).toBeTruthy();
  expect(isValid("()[]{}")).toBeTruthy();
  expect(isValid("")).toBeTruthy();
  expect(isValid("([[{}]]{}()){}")).toBeTruthy();
  expect(isValid("(")).toBeFalsy();
  expect(isValid("({)")).toBeFalsy();
  expect(isValid("({]}[)")).toBeFalsy();
  expect(isValid("([[{}]]{{}())")).toBeFalsy();
  expect(isValid("({)}")).toBeFalsy();
});

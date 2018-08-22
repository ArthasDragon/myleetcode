import longestValidParentheses from "@/problem32";

test("Longest Valid Parentheses", () => {
  expect(longestValidParentheses("()()")).toBe(4);
  expect(longestValidParentheses("(()())()")).toBe(8);
  expect(longestValidParentheses(")(()())()")).toBe(8);
  expect(longestValidParentheses(")(()()()()")).toBe(8);
  expect(longestValidParentheses(")(()())()(()")).toBe(8);
});

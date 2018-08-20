import generateParenthesis from "@/problem22";

test("Generate Parentheses", () => {
  expect(generateParenthesis(3)).toHaveLength(5);
  generateParenthesis(3).forEach(item => {
    expect(["((()))", "(()())", "(())()", "()(())", "()()()"]).toEqual(
      expect.arrayContaining([item])
    );
  });
});

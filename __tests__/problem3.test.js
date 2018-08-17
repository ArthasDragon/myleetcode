import lengthOfLongestSubstring from "@/problem3";

test("Longest Substring Without Repeating Characters", () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
  expect(lengthOfLongestSubstring(" ")).toBe(1);
  expect(lengthOfLongestSubstring("aaa")).toBe(1);
  expect(lengthOfLongestSubstring("aaabbcd")).toBe(3);
  expect(lengthOfLongestSubstring("aaabb")).toBe(2);
  expect(lengthOfLongestSubstring("abclkjldkfjliejld")).toBe(7);
});

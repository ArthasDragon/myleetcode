import longestPalindrome from "@/problem5";

test("Longest Palindromic Substring", () => {
  expect(["aba", "bab"]).toEqual(
    expect.arrayContaining([longestPalindrome("babad")])
  );
  expect([""]).toEqual(expect.arrayContaining([longestPalindrome("")]));
  expect(["a", "b", "c"]).toEqual(
    expect.arrayContaining([longestPalindrome("abc")])
  );
});

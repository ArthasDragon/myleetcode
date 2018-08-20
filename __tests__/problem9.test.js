import isPalindrome from "@/problem9";

test("Palindrome Number", () => {
  expect(isPalindrome("32131")).toBeFalsy();
  expect(isPalindrome("-12321")).toBeFalsy();
  expect(isPalindrome("")).toBeTruthy();
  expect(isPalindrome("12321")).toBeTruthy();
});

import isScramble from "@/problem87";

test("Scramble String", () => {
  expect(isScramble("abc", "acb")).toBeTruthy();
  expect(isScramble("abcde", "caebd")).toBeFalsy();
  expect(isScramble("uhblulvqcpczfd", "lbzfcuphucvqld")).toBeFalsy();
});

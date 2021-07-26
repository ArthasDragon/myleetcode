import isInterleave from "@/problem97";

test("Interleaving String", () => {
  expect(
    isInterleave(
      "bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa",
      "babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab",
      "babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab"
    )
  ).toBeFalsy();

  expect(isInterleave("", "", "")).toBeTruthy();
  expect(isInterleave("aabc", "abad", "aabcabad")).toBeTruthy();
});

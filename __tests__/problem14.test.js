import longestCommonPrefix from "@/problem14";

test("Longest Common Prefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["abba", "dbbd"])).toBe("");
});

import minWindow from "@/problem76";

test("Minimum Window Substring", () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  expect(minWindow("ADOBECODEBANC", "ABCC")).toBe("CODEBANC");
});

import strStr from "@/problem28";

test("Implement strStr()", () => {
  expect(strStr("hello", "")).toBe(0);
  expect(strStr("hello", "ll")).toBe(2);
});

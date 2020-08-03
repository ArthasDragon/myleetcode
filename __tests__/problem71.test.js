import simplifyPath from "@/problem71";

test("Simplify Path", () => {
  expect(simplifyPath("/home/")).toBe("/home");
  expect(simplifyPath("/a//b////c/d//././/..")).toBe("/a/b/c");
  expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
});

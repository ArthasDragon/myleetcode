import multiply from "@/problem43";

test("Multiply Strings", () => {
  expect(multiply("2", "3")).toBe("6");
  expect(multiply("123456789", "987654321")).toBe("121932631112635269");
});

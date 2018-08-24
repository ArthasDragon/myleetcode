import countAndSay from "@/problem38";

test("Count and Say", () => {
  expect(countAndSay(0)).toBe("1");
  expect(countAndSay(1)).toBe("1");
  expect(countAndSay(-1)).toBe("1");
  expect(countAndSay(10)).toBe("13211311123113112211");
});

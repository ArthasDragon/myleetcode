import numDecodings from "@/problem91";

test("Decode Ways", () => {
  expect(numDecodings("1302")).toBe(0);
  expect(numDecodings("132")).toBe(2);
  expect(numDecodings("226")).toBe(3);
  expect(numDecodings("2232323231123132123211")).toBe(3600);
});

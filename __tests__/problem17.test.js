import letterCombinations from "@/problem17";

test("Letter Combinations of a Phone Number", () => {
  expect(letterCombinations("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf"
  ]);
});

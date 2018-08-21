import findSubstring from "@/problem30";

test("Substring with Concatenation of All Words", () => {
  expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
  expect(
    findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
  ).toEqual([]);
  expect(
    findSubstring("wordgoodgoodgoodbestword", ["good", "good", "best", "word"])
  ).toEqual([8]);
  expect(findSubstring("aaaaaaaa", ["aa", "aa", "aa"])).toEqual([0, 2, 1]);
  expect(findSubstring("a", ["a"])).toEqual([0]);
});

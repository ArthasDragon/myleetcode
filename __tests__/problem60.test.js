import getPermutation from "@/problem60";

test("Permutation Sequence", () => {
  expect(getPermutation(3, 3)).toEqual("213");
  expect(getPermutation(4, 9)).toEqual("2314");
});

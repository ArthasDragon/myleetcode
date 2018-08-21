import nextPermutation from "@/problem31";

test("Next Permutation", () => {
  expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3]);
  expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

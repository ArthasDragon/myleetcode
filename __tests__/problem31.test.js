import nextPermutation from "@/problem31";

test("Next Permutation", () => {
  expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3]);
  expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
  expect(nextPermutation([1, 7, 6, 3, 5, 5, 4, 4, 3, 2, 1])).toEqual([
    1,
    7,
    6,
    4,
    1,
    2,
    3,
    3,
    4,
    5,
    5
  ]);
});

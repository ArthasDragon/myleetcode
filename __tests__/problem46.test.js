import permute from "@/problem46";

test("Permutations", () => {
  expect(permute([1])).toEqual([[1]]);

  let resultArr3 = permute([1, 2, 3]);
  expect(resultArr3).toHaveLength(6);
  resultArr3.forEach(item => {
    expect([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]).toEqual(expect.arrayContaining([item]));
  });

  let resultArr4 = permute([1, 2, 3, 4]);
  expect(resultArr4).toHaveLength(24);
  resultArr4.forEach(item => {
    expect([
      [1, 2, 3, 4],
      [2, 1, 3, 4],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [1, 3, 2, 4],
      [3, 1, 2, 4],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [1, 3, 4, 2],
      [3, 1, 4, 2],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [1, 2, 4, 3],
      [2, 1, 4, 3],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [1, 4, 2, 3],
      [4, 1, 2, 3],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [1, 4, 3, 2],
      [4, 1, 3, 2],
      [4, 3, 1, 2],
      [4, 3, 2, 1]
    ]).toEqual(expect.arrayContaining([item]));
  });
});

import permuteUnique from "@/problem47";

test("permuteUnique", () => {
  let resultArr = permuteUnique([1, 1, 2]);
  expect(resultArr).toHaveLength(3);
  resultArr.forEach(item => {
    expect([[1, 1, 2], [1, 2, 1], [2, 1, 1]]).toEqual(
      expect.arrayContaining([item])
    );
  });
});

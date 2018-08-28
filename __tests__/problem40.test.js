import combinationSum2 from "@/problem40";

test("Combination Sum II", () => {
  let result1 = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
  expect(result1).toHaveLength(4);
  result1.forEach(item => {
    expect([[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]).toEqual(
      expect.arrayContaining([item])
    );
  });
});

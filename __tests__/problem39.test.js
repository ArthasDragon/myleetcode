import combinationSum from "@/problem39";

test("Combination Sum", () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
});

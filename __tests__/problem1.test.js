import twoSum from "@/problem1.js";

test("twoSum", () => {
  expect([[0, 1], [1, 0]]).toEqual(
    expect.arrayContaining([twoSum([1, 2, 3], 3)])
  );
});

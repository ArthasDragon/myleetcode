import twoSum from "@/problem1.js";

test("获取时间展示", () => {
  expect([[0, 1], [1, 0]]).toEqual(
    expect.arrayContaining([twoSum([1, 2, 3], 3)])
  );
});

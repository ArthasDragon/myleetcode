import searchRange from "@/problem34";

test("Find First and Last Position of Element in Sorted Array", () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
});

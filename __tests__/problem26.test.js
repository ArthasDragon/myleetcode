import removeDuplicates from "@/problem26";

test("Remove Duplicates from Sorted Array", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([
    0,
    1,
    2,
    3,
    4
  ]);
});

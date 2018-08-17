import findMedianSortedArrays from "@/problem4";

test("Median of Two Sorted Arrays", () => {
  expect(findMedianSortedArrays([], [])).toBe(0);
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  expect(findMedianSortedArrays([1, 3], [2, 4, 6, 8])).toBe(3.5);
  expect(findMedianSortedArrays([1, 3], [2, 8, 15])).toBe(3);
});

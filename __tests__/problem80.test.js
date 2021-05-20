import removeDuplicates from "@/problem80";

test("Remove Duplicates from Sorted Array II", () => {
  expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toBe(5);
  expect(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3])).toBe(5);
});

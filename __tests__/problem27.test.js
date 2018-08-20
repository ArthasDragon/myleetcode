import removeElement from "@/problem27";

test("Remove Element", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual([2, 2]);
  expect(removeElement([], 3)).toEqual([]);
  expect(removeElement("", 3)).toEqual([]);
});

import sortColors from "@/problem75";

test("Sort Colors", () => {
  sortColors([2, 0, 2, 1, 1, 0]).forEach((item, index) => {
    expect(item).toBe([0, 0, 1, 1, 2, 2][index]);
  });
});

import spiralOrder from "@/problem54";

test("Spiral Matrix", () => {
  spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).forEach((item, index) => {
    expect(item).toBe([1, 2, 3, 6, 9, 8, 7, 4, 5][index]);
  });
});

import rotate from "@/problem48";

test("Rotate Image", () => {
  expect([[7, 4, 1], [8, 5, 2], [9, 6, 3]]).toEqual(
    expect.arrayContaining(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  );
});

import exist from "@/problem79";

test("Word Search", () => {
  expect(
    exist(
      [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
      "ABCCED"
    )
  ).toBeTruthy;
  expect(
    exist(
      [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
      "SEE"
    )
  ).toBeTruthy;
  expect(
    exist(
      [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
      "ABCB"
    )
  ).toBeFalsy;
});

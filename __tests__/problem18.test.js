import fourSum from "@/problem18";

test("4Sum", () => {
  let firstVerify = fourSum([1, 0, -1, 0, -2, 2], 0);
  expect(firstVerify).toHaveLength(3);
  firstVerify.forEach(item => {
    expect([[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]]).toEqual(
      expect.arrayContaining([item])
    );
  });
});

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  const output = [];
  const numsLength = nums.length;
  nums.sort();

  const recurse = (soFar = [], whatsLeft = nums) => {
    if (soFar.length === numsLength) {
      output.push([...soFar]);
    } else {
      for (let i = 0; i < whatsLeft.length; i += 1) {
        if (whatsLeft[i] !== whatsLeft[i - 1]) {
          soFar.push(whatsLeft.splice(i, 1)[0]);
          recurse(soFar, whatsLeft);
          whatsLeft.splice(i, 0, soFar.pop());
        }
      }
    }
  };

  recurse();
  return output;
};

export default permuteUnique;

/**
 * Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let len = nums.length;
  if (len === 1) {
    return [nums];
  }
  if (len === 2) {
    return [[nums[0], nums[1]], [nums[1], nums[0]]];
  }
  let result = [];
  for (let i = 0; i < len; i++) {
    result = result.concat(
      permute(nums.filter((item, index) => index != i)).map(item =>
        [nums[i]].concat(item)
      )
    );
  }

  return result;
};

export default permute;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
  let sort_nums = nums.sort((a, b) => a - b);
  let near = null;
  for (let i = 0, len = nums.length; i < len; ++i) {
    let left = i + 1;
    let right = sort_nums.length - 1;
    while (right > left) {
      let curr_num = sort_nums[left] + sort_nums[right] + sort_nums[i];
      near =
        near == null
          ? curr_num
          : Math.abs(curr_num - target) < Math.abs(near - target)
            ? curr_num
            : near;
      if (curr_num - target == 0) {
        return target;
      }
      if (curr_num - target > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return near;
};

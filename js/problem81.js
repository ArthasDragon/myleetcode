/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    let m = i + ((j - i) >> 1);
    if (nums[m] === target) return true;
    if (nums[i] === nums[m]) {
      // 左等于中, 无法判断  这步是关键！！！！剔除不能判断的情况
      i++;
      if (nums[j] === nums[m]) j--;
    } else if (nums[i] > nums[m]) {
      // 左大于中
      if (nums[m] < target && nums[j] >= target) {
        i = m + 1;
      } else {
        j = m - 1;
      }
    } else {
      // 左小于中
      if (nums[i] <= target && nums[m] > target) {
        j = m - 1;
      } else {
        i = m + 1;
      }
    }
  }
  return false;
};

export default search;

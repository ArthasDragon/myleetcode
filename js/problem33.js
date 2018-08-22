/**
 *  Search in Rotated Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

export default search;

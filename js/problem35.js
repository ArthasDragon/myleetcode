/**
 * Search Insert Position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return left;
};

export default searchInsert;

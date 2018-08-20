/**
 * Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  return nums.filter(item => item != val);
};
export default removeElement;

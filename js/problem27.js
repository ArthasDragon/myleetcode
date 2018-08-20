/**
 * Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  if (!Array.isArray(nums)) {
    return [];
  }
  return nums.filter(item => item != val);
};
export default removeElement;

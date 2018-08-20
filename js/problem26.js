/**
 * Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let obj = {};
  let sum = [];
  nums.forEach(item => {
    if (!obj[item]) {
      obj[item] = true;
      sum.push(item);
    }
  });
  return sum;
};

export default removeDuplicates;

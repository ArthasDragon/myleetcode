/**
 * 根据传入数组返回数组中和为target的两个数字下标
 * @param {Array[Number]} nums
 * @param {Number} target
 * @return {Array[Number]}
 */
var twoSum = function(nums, target) {
  var obj = {};
  for (var i = 0, len = nums.length; i < len; ++i) {
    var n = target - nums[i];
    if (obj[n] !== undefined && obj[n] !== i) {
      return [i, obj[n]];
    }
    obj[nums[i]] = i;
  }
};
export default twoSum;

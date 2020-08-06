/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let count = 0; // 循环次数
  let curIndex = 0; // 当前下标
  let len = nums.length; // nums长度

  // 一共循环nums长度的次数
  while (count < len) {
    count++;
    // 如果当前值为2 放到队末 curIndex不变
    if (nums[curIndex] === 2) {
      nums.push(nums.splice(curIndex, 1)[0]);
      continue;
    }

    // 其他情况curindex++
    // 如果当前值为0 放到队首
    if (nums[curIndex] === 0) {
      nums.unshift(nums.splice(curIndex, 1)[0]);
    }
    curIndex++;
  }

  // 返回排序好的数组
  return nums;
};

export default sortColors;

// 其他思路
// 荷兰国旗问题
// https://leetcode-cn.com/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode/

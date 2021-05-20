/**
 * Remove Duplicates from Sorted Array II
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let curNum = ""; // 记录当前数值
  let curQuantity = 0; // 记录当前数值的个数
  let len = nums.length; // 实时记录数组长度
  // 从头遍历
  for (let i = 0; i < len; i++) {
    let item = nums[i];
    // 如果当前遍历到的是记录的数则个数+1  否则重置当前记录的数据并将个数置于1
    if (curNum == item) {
      curQuantity++;
    } else {
      curNum = item;
      curQuantity = 1;
    }
    // 如果当前记录的个数大于2  则删除当前遍历的数组项并动态改变遍历下标和数组长度
    if (curQuantity > 2) {
      nums.splice(i, 1);
      i--;
      len--;
    }
  }

  return nums.length;
};

export default removeDuplicates;

// 双指针 网上的  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-yec2/

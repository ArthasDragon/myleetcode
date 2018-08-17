/**
 * Median of Two Sorted Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let total_arr = [];
  let numb = null;

  //两个有序数组合为一个有序数组
  while (nums1.length && nums2.length) {
    let value1 = nums1[0];
    let value2 = nums2[0];
    if (value1 <= value2) {
      total_arr.push(value1);
      nums1.shift();
    } else {
      total_arr.push(value2);
      nums2.shift();
    }
  }
  total_arr = total_arr.concat(nums1, nums2);

  //合成后的有序数组中间两数相加/2即可
  let len = total_arr.length;
  if (len === 0) {
    return 0;
  }
  if (len % 2 == 0) {
    numb = (total_arr[len / 2 - 1] + total_arr[len / 2]) / 2;
  } else {
    numb = total_arr[(len - 1) / 2];
  }
  return numb;
};

export default findMedianSortedArrays;

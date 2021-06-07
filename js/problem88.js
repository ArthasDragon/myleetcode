/**
 * Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  let j = 0; // 记录nums已经遍历过的位置
  // 遍历nums2数组中的每一项  寻找nums1中的位置插入同时删除末尾的一个0
  for (let i = 0; i < n; i++) {
    // 当nums1没到末尾的时候进行遍历
    while (j < m) {
      if (nums2[i] <= nums1[j]) {
        // 如果找到比nums2中的当前项大的项 则插入该项之前
        nums1.splice(j, 0, nums2[i]);
        nums1.pop(); // 删除末尾的一个0
        // m和j同时++ m为已经排好序的长度，j为当前nums1被插入的位置
        m++;
        j++;
        break;
      } else {
        // 继续向后找比nums2中的当前项大的项
        j++;
      }
    }
    // 证明到末尾了  现在nums2中的所有项都比nums中的大
    if (j >= m) {
      // 将每一项加入到对应位置  并将位置j++
      nums1.splice(j, 0, nums2[i]);
      nums1.pop();
      j++;
    }
  }
};

export default merge;

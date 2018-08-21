/**
 * Next Permutation
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function(nums) {
  if (!nums.length) {
    return nums;
  }
  if (nums.length === 1) {
    return nums;
  }
  let len = nums.length;
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = i + 1;
    while (j < len && nums[j] > nums[i]) {
      j++;
    }
    swap(nums, i, j - 1);
  }
  reverse(nums, i + 1, nums.length - 1);
  return nums;
};

const swap = function(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

export default nextPermutation;

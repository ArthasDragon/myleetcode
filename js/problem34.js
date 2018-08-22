/**
 * Find First and Last Position of Element in Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let midIndex = Math.floor((left + right) / 2);
  let result = [-1, -1];

  //judge special condition
  if (!nums.length) {
    return [-1, -1];
  }
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0];
    }
    return [-1, -1];
  }
  if (nums[left] === target || nums[right] === target) {
    if (nums[left] === target) {
      result[0] = left;
      while (nums[left] === target) {
        left++;
      }
      result[1] = left - 1;
    }
    if (nums[right] === target) {
      result[1] = right;
      while (nums[right] === target) {
        right--;
      }
      result[0] = right + 1;
    }
    return result;
  }

  while (left < right) {
    //binary search util nums[midIndex] equals target
    if (nums[midIndex] < target) {
      left = midIndex;
      midIndex = Math.floor((left + right) / 2);
    } else if (nums[midIndex] > target) {
      right = midIndex;
      midIndex = Math.floor((left + right) / 2);
    } else {
      //nums[midIndex] equals target
      //traverse to find the first index and the last index of target, set value to result
      while (nums[right] !== target) {
        right--;
      }
      while (nums[left] !== target) {
        left++;
      }
      result = [left, right];
      return result;
    }
    if (right - left === 1) {
      if (nums[left] === target) {
        result = [left, left];
      }
      if (nums[right] === target) {
        result = [right, right];
      }
      return result;
    }
  }
  return result;
};
export default searchRange;

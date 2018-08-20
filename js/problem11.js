/**
 * Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let m = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(m, max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

export default maxArea;

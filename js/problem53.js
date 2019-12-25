/**
 * @param {number[]} nums
 * @return {number}
 */

// initial solution
const maxSubArray = function(nums) {
  let res = nums[0];
  let sum = 0;
  // 若一串子序列和<=0则舍弃该子序列直接取后面的第一个>0 的数开始重新计算
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    res = Math.max(res, sum); // 记录当前最大子序的和
  }
  return res;
};

export default maxSubArray;

// internet better

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     if (!nums.length) {
//           return;
//       };
//       // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
//       let max_ending_here = nums[0];
//       let max_so_far = nums[0];

//       for (let i = 1; i < nums.length; i ++ ) {
//           // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

//           max_ending_here = Math.max ( nums[i], max_ending_here + nums[i]);
//           max_so_far = Math.max ( max_so_far, max_ending_here);
//       };

//       return max_so_far;

//   }

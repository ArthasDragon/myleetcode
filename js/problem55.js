/**
 * @param {number[]} nums
 * @return {boolean}
 */

// my initial solution
var canJump = function(nums) {
  //  能到达某位置的前面最近的一个位置  与该位置的可到达性相同
  // 从最后一位开始向前依次判断 是否到起点即可
  let dp = n => {
    // 到达起点返回true
    if (n === 0) {
      return true;
    }
    //依次向前判断
    for (let i = n - 1; i >= 0; i--) {
      if (nums[i] >= n - i) {
        return dp(i);
      }
    }
  };
  return !!dp(nums.length - 1);
};

export default canJump;

// internet better solutions

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     var lenPoint = nums.length-1;
//     var leftPos =lenPoint;
//     for(var left = lenPoint;left>=0;left--){
//         if(nums[left]+left >= leftPos){
//             leftPos = left;
//         }
//     }
//     return leftPos == 0;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     var canJumpMax = 0;
//     var len = nums.length;
//     for(var i = 0;i<len;i++){
//         if(i > canJumpMax){
//          return false;
//         }
//         canJumpMax = Math.max(canJumpMax,i+nums[i]);
//         if(canJumpMax >= len-1){
//             return true;
//         }
//     }
// };

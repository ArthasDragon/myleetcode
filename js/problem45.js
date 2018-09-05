/**
 * Jump Game II
 * @param {number[]} nums
 * @return {number}
 */

//  version 1
// let jump = function(nums) {
//   if (nums.length === 1) {
//     return 0;
//   }
//   let result = 0;
//   let endIndex = nums.length - 1;
//   let stepMap = { "0": [endIndex] };
//   while (true) {
//     let lastIndexArr = stepMap[result];
//     stepMap[++result] = [];
//     for (let i = 0; i < endIndex; i++) {
//       if (lastIndexArr.some(item => i + nums[i] >= item)) {
//         stepMap[result].push(i);
//         if (i === 0) {
//           console.log(result);
//           return result;
//         }
//       }
//     }
//   }
// };

//version 2
// let jump = function(nums) {
//   if (nums.length === 1) {
//     return 0;
//   }
//   let result = 1;
//   let startIndex = 0;
//   let lastEndIndex = 0;
//   while (lastEndIndex + nums[lastEndIndex] < nums.length - 1) {
//     let nextStartIndex = startIndex;
//     let max = startIndex;
//     for (let i = startIndex + 1; i <= lastEndIndex + nums[lastEndIndex]; i++) {
//       if (i + nums[i] > max) {
//         max = i + nums[i];
//         nextStartIndex = i;
//       }
//     }
//     startIndex = lastEndIndex + nums[lastEndIndex];
//     lastEndIndex = nextStartIndex;
//     result++;
//   }
//   return result;
// };

//version 3
let jump = function(nums) {
  if (nums.length === 1) {
    return 0;
  }
  let result = 1;
  let startIndex = 0;
  let endIndex = startIndex + nums[startIndex];
  while (endIndex < nums.length - 1) {
    let tempIndex = endIndex;
    for (let i = startIndex + 1; i <= endIndex; i++) {
      tempIndex = Math.max(tempIndex, i + nums[i]);
    }
    startIndex = endIndex;
    endIndex = tempIndex;
    result++;
  }

  return result;
};

/**
 * internet better version
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums) {
//     let res = 0;
//     let last = 0;
//     let cur = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//       cur = Math.max(cur, i + nums[i]);
//       if (i === last) {
//         last = cur;
//         res++;
//         if (cur >= nums.length - 1) break;
//       }
//     }
//     return res;
//   };

export default jump;

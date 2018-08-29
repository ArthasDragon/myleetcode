/**
 * Trapping Rain Water
 * @param {number[]} height
 * @return {number}
 */

//origin solution  Time Limit Exceeded
// let trap = function(height) {
//   if (height.length <= 2) {
//     return 0;
//   }
//   //初始化参数
//   let result = 0;
//   let len = height.length;
//   let topMap = { value: 0 };

//   //记录最高项的值和对应index
//   //find the topest index/value
//   for (let i = 0; i < len; i++) {
//     if (height[i] >= topMap.value) {
//       topMap["value"] = height[i];
//       topMap["index"] = i;
//     }
//   }
//   let topValue = topMap.value;
//   let topIndex = topMap.index;

//   //traverse every height sideway from index
//   for (let i = topValue; i > 0; i--) {
//     let curSanLen = 0;
//     for (let left = topIndex - 1; left >= 0; left--) {
//       if (height[left] >= i) {
//         result += curSanLen;
//         curSanLen = 0;
//       } else {
//         curSanLen++;
//       }
//     }
//     curSanLen = 0;

//     for (let right = topIndex + 1; right < len; right++) {
//       if (height[right] >= i) {
//         result += curSanLen;
//         curSanLen = 0;
//       } else {
//         curSanLen++;
//       }
//     }
//   }
//   return result;
// };

let trap = function(height) {};

export default trap;

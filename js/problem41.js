/**
 * First Missing Positive
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
  if (!nums.length) {
    return 1;
  }
  nums.sort((a, b) => a - b);
  let result = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let curNum = nums[i];
    if (curNum > 0) {
      if (curNum - 1 === result) {
        result = curNum;
      }
      if (curNum - 1 > result) {
        return result + 1;
      }
    }
  }

  return result + 1;
};

export default firstMissingPositive;

/**
 * better solution
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//     if(nums.length === 0) return 1;
//     var flag = 1;
//     while(nums.indexOf(flag) !== -1){
//       flag++;
//     }
//     return flag;
//   };

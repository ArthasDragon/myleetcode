/**
 * Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let len = nums.length;
  if (len === 1) {
    return [nums];
  }
  if (len === 2) {
    return [[nums[0], nums[1]], [nums[1], nums[0]]];
  }
  let result = [];
  for (let i = 0; i < len; i++) {
    result = result.concat(
      permute(nums.filter((item, index) => index != i)).map(item =>
        [nums[i]].concat(item)
      )
    );
  }

  return result;
};

export default permute;

//internet better solution
// let permute = function(nums) {
//   let list = [];
//   let templist = [];

//   let backtrack = function(list, tempList, nums){
//       if(tempList.length === nums.length) {
//           let newList = tempList.slice()
//           list.push(newList);
//       }

//       for(let i = 0; i < nums.length; i++) {
//           if(tempList.includes(nums[i])) continue; // element already exists, skip
//           tempList.push(nums[i]);
//           backtrack(list, tempList, nums);
//           tempList.splice(tempList.length - 1, 1);
//       }
//   }

//  backtrack(list, templist, nums);

//  return list;
// }

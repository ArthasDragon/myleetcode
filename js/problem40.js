/**
 * 与上一题思路基本相同
 * Combination Sum II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let len = candidates.length;
  if (!len) {
    return [];
  }
  let resMap = {};
  let result = [];
  function calc(curSum, curIndex, curArr) {
    for (let i = curIndex + 1; i < len; i++) {
      let sum = curSum + candidates[i];
      if (sum < target && i != len - 1) {
        calc(sum, i, curArr.concat(candidates[i]));
      }
      if (sum === target) {
        let prepAddArr = curArr.concat(candidates[i]);
        if (!resMap[prepAddArr + ""]) {
          resMap[prepAddArr + ""] = true;
          result.push(prepAddArr);
        }
      }
    }
  }

  for (let i = 0; i < len; ++i) {
    let curSum = candidates[i];
    if (curSum < target) {
      if (i != len - 1) {
        calc(curSum, i, [curSum]);
      }
    }
    if (curSum === target) {
      if (!resMap[[curSum] + ""]) {
        resMap[[curSum] + ""] = true;
        result.push([curSum]);
      }
    }
  }
  return result;
};

export default combinationSum2;

/**
 * better solution
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum2 = function(candidates, target) {
//   const list = [];
//   backtrack(candidates.sort((a, b) => a - b), 0, target, [], list);
//   return list;
// };
// function backtrack(candidates, index, target, subset, list) {
//   if (target === 0) {
//     list.push(subset.slice());
//   }
//   if (target <= 0 || index >= candidates.length || candidates[index] > target) {
//     return;
//   }
//   const value = candidates[index];
//   subset.push(value);
//   backtrack(candidates, index + 1, target - value, subset, list);
//   subset.pop();
//   while (index < candidates.length && candidates[index] === value) {
//     index += 1;
//   }
//   backtrack(candidates, index, target, subset, list);
// }

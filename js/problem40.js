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

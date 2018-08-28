/**
 * Combination Sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function(candidates, target) {
  let result = [];
  let len = candidates.length;
  candidates.sort((a, b) => a - b);

  function calc(curNumsArr, curSum, curIndex) {
    for (let i = curIndex; i < len; ++i) {
      let curValue = candidates[i];
      let sum = curSum + curValue;
      if (sum < target) {
        calc(curNumsArr.concat(curValue), sum, i);
      }
      if (sum === target) {
        result.push(curNumsArr.concat(curValue));
      }
      if (sum > target) {
        return;
      }
    }
  }

  for (let i = 0; i < len; ++i) {
    let curValue = candidates[i];
    if (curValue === target) {
      result.push([curValue]);
    }
    if (curValue < target) {
      calc([curValue], curValue, i);
    }
  }

  return result;
};

// combinationSum([2, 3, 6, 7], 7);
export default combinationSum;

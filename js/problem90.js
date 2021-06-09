/**
 * Subsets II
 * @param {number[]} nums
 * @return {number[][]}
 */

// 可以优化   思路差不多  不用多余的记录个数的步骤
const subsetsWithDup = function(nums) {
  let res = [];
  let itemObj = {};
  // 特殊情况
  if (nums.length == 1) {
    return [nums, []];
  }

  // 记录nums中不同项的值和个数
  nums.sort().forEach(item => {
    if (!itemObj[item]) {
      itemObj[item] = 1;
    } else {
      itemObj[item]++;
    }
  });
  // 不同的项组成的数组
  let items = Object.keys(itemObj);

  // 每个项的不同个数组成不同的排列，直到遍历完所有项加到res中
  const helper = (i, path) => {
    if (i == items.length) {
      res.push(path);
    } else {
      for (let j = 0; j <= itemObj[items[i]]; j++) {
        helper(i + 1, [...path, ...new Array(j).fill(items[i])]);
      }
    }
  };

  helper(0, []);

  return res;
};
export default subsetsWithDup;

/**
 * Subsets
 * @param {number[]} nums
 * @return {number[][]}
 */

// 1.递归
// var subsets = function (nums) {
//     let res = []
//     // 边界条件
//     if (nums.length == 1) {
//         return [[], [nums[0]]]
//     }

//     // nums的第一项和剩下的所有项结果的组合即为返回的结果
//     let tempArr = [[], [nums.shift()]]
//     tempArr.forEach(item => {
//         subsets(nums).forEach(nItem => {
//             res.push([...item, ...nItem])
//         })
//     })
//     // 记得要把删除的项加回去
//     nums.unshift(tempArr[1])
//     return res
// };

// 2.回溯算法
// https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
const subsets = nums => {
  const res = [];

  const dfs = (index, list) => {
    if (index == nums.length) {
      // 指针越界
      res.push(list.slice()); // 加入解集
      return; // 结束当前的递归
    }
    list.push(nums[index]); // 选择这个数
    dfs(index + 1, list); // 基于该选择，继续往下递归，考察下一个数
    list.pop(); // 上面的递归结束，撤销该选择
    dfs(index + 1, list); // 不选这个数，继续往下递归，考察下一个数
  };

  dfs(0, []);
  return res;
};

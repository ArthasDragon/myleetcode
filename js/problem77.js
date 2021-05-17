/**
 * 我的思路   递归    n和n-1个数中选出k-1个的组合 + n-1个数中选出k个数
 * Combinations
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // 边界判断
  if (k > n || n < 1 || k < 1) {
    return [];
  }

  // 特殊情况判断
  if (k == 1) {
    let res = [];
    for (let i = 1; i <= n; i++) {
      res.push([i]);
    }
    return res;
  }
  // 特殊情况判断
  if (n == 1) {
    return [[1]];
  }

  // n和n-1个数中选出k-1个的组合
  let tempArr = [];
  let littelArr = combine(n - 1, k - 1);
  littelArr.forEach(item => {
    tempArr.push([n, ...item]);
  });

  // n和n-1个数中选出k-1个的组合 + n-1个数中选出k个数
  return [...tempArr, ...combine(n - 1, k)];
};

// 其他  https://leetcode-cn.com/problems/combinations/solution/shou-hua-tu-jie-jian-zhi-he-hui-su-by-xiao_ben_zhu/

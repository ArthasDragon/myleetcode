/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 获取行列的值
  let m = grid.length;
  let n = grid[0].length;

  // 记录结果的数组
  let res = new Array(n);

  // 其余思路同62、 63题
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        res[j] = j === 0 ? grid[i][j] : grid[i][j] + res[j - 1];
      } else if (j === 0) {
        res[j] += grid[i][j];
      } else {
        res[j] = grid[i][j] + Math.min(res[j - 1], res[j]);
      }
    }
  }

  return res[n - 1];
};

export default minPathSum;

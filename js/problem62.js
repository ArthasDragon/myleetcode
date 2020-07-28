/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 思路：从终点开始向上向左一行一行累加路径个数
var uniquePaths = function(m, n) {
  if (m === 1 && n === 1) {
    return 1;
  }
  let countMap = {}; // 记录每一个点的路径数
  countMap[`${m}-${n}`] = 1;
  for (let i = m; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      let key = `${i}-${j}`;
      if (countMap[key]) {
        continue;
      }
      if (i === m) {
        countMap[key] = countMap[`${i}-${j + 1}`];
      } else if (j === n) {
        countMap[key] = countMap[`${i + 1}-${j}`];
      } else {
        countMap[key] = countMap[`${i + 1}-${j}`] + countMap[`${i}-${j + 1}`];
      }
    }
  }
  return countMap["1-1"];
};

// internet better solution
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 思路：二维数组描述行列图， 从起点开始向下向右一行行算
// var uniquePaths = function(m, n) {
//   if(m <= 0 && n <= 0) {
//       return 0;
//   }
//   const dp = new Array(m).fill([]);
//   for(let i = 0; i < m; i ++) {
//       dp[i][0] = 1;
//   }
//   for(let j = 0; j < n; j ++) {
//       dp[0][j] = 1;
//   }
//   for(let i = 1; i < m; i ++) {
//       for(let j = 1; j < n; j ++){
//           dp[i][j] = dp[i][j-1] + dp[i-1][j];
//       }
//   }
//   return dp[m-1][n-1];

// };

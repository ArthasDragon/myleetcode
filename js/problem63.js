/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let n = obstacleGrid[0].length;
  let m = obstacleGrid.length;
  // 边界条件
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  // 将障碍改为-1
  obstacleGrid = obstacleGrid.map(item => {
    return item.map(num => {
      return num === 1 ? -1 : num;
    });
  });

  // 第一行设置为1  遇到障碍则跳出
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === -1) {
      break;
    }
    obstacleGrid[i][0] = 1;
  }

  // 第一列设置为1  遇到障碍则跳出
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === -1) {
      break;
    }
    obstacleGrid[0][i] = 1;
  }

  // 向右 下一行行遍历即可
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let a = obstacleGrid[i - 1][j] === -1 ? 0 : obstacleGrid[i - 1][j];
      let b = obstacleGrid[i][j - 1] === -1 ? 0 : obstacleGrid[i][j - 1];
      obstacleGrid[i][j] = obstacleGrid[i][j] === -1 ? -1 : a + b;
    }
  }

  // 返回结束位置的值
  return obstacleGrid[m - 1][n - 1] === -1 ? 0 : obstacleGrid[m - 1][n - 1];
};

// internet better solution
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// 数据转化为一维数组即可  逐行处理数据
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   let h = obstacleGrid.length,
//    w = obstacleGrid[0].length,
//    res = [];
//   for(let x = 0;x<w;x++){
//       res[x] = 0;
//   }
//   res[0] = obstacleGrid[0][0]^1;
//   for(let i = 0;i<h;i++){
//       for(let j = 0;j<w;j++){
//           if(obstacleGrid[i][j]==1){
//               res[j] = 0;
//           }else if(j-1>-1){
//              res[j] +=res[j-1]
//           }
//       }

//   }
//   return res[w-1];

// };

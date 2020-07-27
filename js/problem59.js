/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  // 初始化 n * n 矩阵
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n).fill(0);
  }

  let flag = 0;
  let direction = 1;
  let row = 0;
  let col = 0;
  let num = 1;

  result[row][col] = num++;

  while (flag < 4) {
    switch (direction) {
      // 左右
      case 1:
        if (col === n - 1 || result[row][col + 1] !== 0) {
          direction = 2;
          flag += 1;
        } else {
          flag = 0;
          col += 1;
          result[row][col] = num++;
        }
        break;
      // 上下
      case 2:
        if (row === n - 1 || result[row + 1][col] !== 0) {
          direction = 3;
          flag += 1;
        } else {
          flag = 0;
          row += 1;
          result[row][col] = num++;
        }
        break;
      // 右左
      case 3:
        if (col === 0 || result[row][col - 1] !== 0) {
          direction = 4;
          flag += 1;
        } else {
          flag = 0;
          col -= 1;
          result[row][col] = num++;
        }
        break;
      // 下上
      case 4:
        if (row === 0 || result[row - 1][col] !== 0) {
          direction = 1;
          flag += 1;
        } else {
          flag = 0;
          row -= 1;
          result[row][col] = num++;
        }
        break;
    }
  }

  return result;
};

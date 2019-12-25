/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// my initial solution
var spiralOrder = function(matrix) {
  // 特殊情况判断
  if (!matrix.length) {
    return [];
  }

  // 边界行列
  let maxRow = matrix.length;
  let maxCol = matrix[0].length;

  // 当前行列坐标
  let row = 0;
  let col = 0;
  let direction = 1; // 方向  1 - 左右  2 - 上下  3 - 右左  4 - 下上
  let res = []; // 结果数组
  res.push(matrix[row][col]);
  matrix[row][col] = ".";

  let flag = 0; // 记录重定向次数  4次则证明到头了

  // 没到最后一个点的时候进行循环
  while (flag !== 4) {
    //  根据当前方向进行操作  判断边界条件改变方向
    if (direction === 1) {
      if (col === maxCol - 1 || matrix[row][col + 1] === ".") {
        direction = 2;
        flag += 1;
        continue;
      } else {
        flag = 0;
        col += 1;
        res.push(matrix[row][col]);
        matrix[row][col] = ".";
      }
    }
    if (direction === 2) {
      if (row === maxRow - 1 || matrix[row + 1][col] === ".") {
        direction = 3;
        flag += 1;
        continue;
      } else {
        flag = 0;
        row += 1;
        res.push(matrix[row][col]);
        matrix[row][col] = ".";
      }
    }
    if (direction === 3) {
      if (col === 0 || matrix[row][col - 1] === ".") {
        direction = 4;
        flag += 1;
        continue;
      } else {
        flag = 0;
        col -= 1;
        res.push(matrix[row][col]);
        matrix[row][col] = ".";
      }
    }
    if (direction === 4) {
      if (row === 0 || matrix[row - 1][col] === ".") {
        direction = 1;
        flag += 1;
        continue;
      } else {
        flag = 0;
        row -= 1;
        res.push(matrix[row][col]);
        matrix[row][col] = ".";
      }
    }
  }
  return res;
};

export default spiralOrder;

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//  思路：第一次遍历记录有0的行数，列数
//        第二次遍历根据第一次的数据置 0
var setZeroes = function(matrix) {
  let hasZeroColumn = {}; // 有0的列序号
  let hasZeroRow = {}; // 有 0 的行序号
  let rowNum = matrix.length; // 行数

  // 第一次遍历记录有 0 的行号，列号
  for (let i = 0; i < rowNum; i++) {
    matrix[i].forEach((item, index) => {
      if (item === 0) {
        hasZeroColumn[index] = true;
        hasZeroRow[i] = true;
      }
    });
  }

  // 第二次遍历根据第一次记录的添加 0
  for (let i = 0; i < rowNum; i++) {
    if (hasZeroRow[i]) {
      matrix[i].fill(0);
    } else {
      matrix[i].forEach((item, index) => {
        if (hasZeroColumn[index]) {
          matrix[i][index] = 0;
        }
      });
    }
  }
  // 返回转化后的矩阵
  return matrix;
};

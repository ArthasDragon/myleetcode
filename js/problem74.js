/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // 空判断
  if (!matrix.length) {
    return false;
  }
  let rowNum = matrix.length; // 行数
  let colNum = matrix[0].length; // 列数

  let left = 0;
  let right = rowNum - 1;
  let mid = 0;

  // 初始边界判断
  if (matrix[0][0] > target || matrix[rowNum - 1][colNum - 1] < target) {
    return false;
  }

  // 二分查找锁定行
  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (matrix[mid][colNum - 1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // 记录查到的行
  let curRow = matrix[left];
  left = 0;
  right = colNum - 1;
  // 重新二分查找目标值
  while (left < right) {
    mid = Math.ceil((left + right) / 2);
    if (curRow[mid] <= target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  // 返回找到的和要找的是否相等
  return curRow[left] === target;
};

export default searchMatrix;

// other solution

// 执行用时为 64 ms 的范例
// 顺序循环？
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   if (!matrix.length) {
//     return false
//   }
//   if (!matrix[0].length) {
//     return false
//   }
//   let res
//   for (let i = 0; i < matrix.length; i++) {
//     // const element = matrix[i]
//     if (target == matrix[i][0]) {
//       return true
//     }
//     if (target < matrix[i][0]) {
//       if (i == 0) {
//         return false
//       }
//       res = i - 1
//       break
//     }
//   }
//   if (isNaN(res)) {
//     res = matrix.length - 1
//   }
//   //   if(matrix)

//   for (let i = 0; i < matrix[res].length; i++) {
//     const element = matrix[res][i]
//     if (element == target) {
//       return true
//     } else if (element > target) {
//       return false
//     }
//   }
//   return false
// }

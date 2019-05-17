/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const len = matrix.length;
  const time = Math.floor(len / 2);
  let next = null;
  for (let i = 0; i < time; i++) {
    let x = i;
    let y = i;
    for (let j = 0; j < len - 2 * i - 1; j++) {
      let temp = matrix[x][y];

      for (let k = 0; k < 4 * (len - 1 - 2 * i); k++) {
        if (x === i) {
          if (y === len - 1 - i) {
            next = matrix[++x][y];
            matrix[x][y] = temp;
            temp = next;
          } else {
            next = matrix[x][++y];
            matrix[x][y] = temp;
            temp = next;
          }
        } else if (y === len - 1 - i) {
          if (x === len - 1 - i) {
            next = matrix[x][--y];
            matrix[x][y] = temp;
            temp = next;
          } else {
            next = matrix[++x][y];
            matrix[x][y] = temp;
            temp = next;
          }
        } else if (x === len - 1 - i) {
          if (y === i) {
            next = matrix[--x][y];
            matrix[x][y] = temp;
            temp = next;
          } else {
            next = matrix[x][--y];
            matrix[x][y] = temp;
            temp = next;
          }
        } else if (y === i) {
          if (x === i) {
            next = matrix[x][++y];
            matrix[x][y] = temp;
            temp = next;
          } else {
            next = matrix[--x][y];
            matrix[x][y] = temp;
            temp = next;
          }
        }
      }
    }
  }
  return matrix;
};
export default rotate;

//internet better solution
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//   for (let i = 0; i < matrix.length / 2; i++) {
//     let temp = matrix[i];
//     matrix[i] = matrix[matrix.length - 1 - i];
//     matrix[matrix.length - 1 - i] = temp;
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = i + 1; j < matrix.length; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
//   return matrix;
// };

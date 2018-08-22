/**
 * Valid Sudoku
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
  let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (num !== ".") {
        if (boxes[boxIndex][num] || rows[i][num] || cols[j][num]) {
          return false;
        }
        boxes[boxIndex][num] = rows[i][num] = cols[j][num] = true;
      }
    }
  }

  return true;
};

export default isValidSudoku;

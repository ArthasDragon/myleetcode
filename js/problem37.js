/**
 *  Sudoku Solver
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//version  1

var solveSudoku = function(board) {
  let [rows, cols, triples, visit] = [{}, {}, {}, []];
  let cloneBoard = {};
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let t = [Math.floor(r / 3), Math.floor(c / 3)];
      rows[r] = rows[r] || new Set();
      cols[c] = cols[c] || new Set();
      triples[t] = triples[t] || new Set();
      if (board[r][c] != ".") {
        rows[r].add(board[r][c]);
        cols[c].add(board[r][c]);
        triples[t].add(board[r][c]);
      } else {
        visit.push([r, c]);
      }
    }
  }

  let allChoose = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  visit = visit.filter(item => {
    let i = item[0];
    let j = item[1];
    let num = board[i][j];
    let boxIndex = [Math.floor(i / 3), Math.floor(j / 3)];
    if (num === ".") {
      let tempArr = allChoose.filter(
        item =>
          !triples[boxIndex].has(item) &&
          !rows[i].has(item) &&
          !cols[j].has(item)
      );

      cloneBoard[[i, j]] = tempArr.length === 1 ? tempArr[0] : tempArr;

      if (tempArr.length === 1) {
        board[i][j] = tempArr[0];
        triples[boxIndex].add(tempArr[0]);
        rows[i].add(tempArr[0]);
        cols[j].add(tempArr[0]);
        return false;
      }
    }
    return true;
  });

  function dfs() {
    if (visit[0] == undefined) {
      return true;
    }
    let [r, c] = visit[0];
    let t = [Math.floor(r / 3), Math.floor(c / 3)];

    cloneBoard[[r, c]].forEach(dig => {
      dig = String(dig);
      if (!rows[r].has(dig) && !cols[c].has(dig) && !triples[t].has(dig)) {
        board[r][c] = dig;
        rows[r].add(dig);
        cols[c].add(dig);
        triples[t].add(dig);
        visit.shift();

        if (dfs()) {
          return true;
        } else {
          board[r][c] = ".";
          rows[r].delete(dig);
          cols[c].delete(dig);
          triples[t].delete(dig);
          visit.unshift([r, c]);
        }
      }
    });
    return false;
  }
  dfs();
};

solveSudoku([
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."]
]);

// export default solveSudoku;

//other's solution

// var solveSudoku = function(board) {
//   let [rows, cols, triples, visit] = [{}, {}, {}, []];
//   for (let r = 0; r < 9; r++) {
//       for (let c = 0; c < 9; c++) {
//           let t = [Math.floor(r / 3), Math.floor(c / 3)];
//           rows[r] = rows[r] || new Set();
//           cols[c] = cols[c] || new Set();
//           triples[t] = triples[t] || new Set();
//           if (board[r][c] != ".") {
//               rows[r].add(board[r][c]);
//               cols[c].add(board[r][c]);
//               triples[t].add(board[r][c]);
//           } else{
//               visit.push([r, c]);
//           }
//       }
//   }
//   function dfs() {
//      if (visit[0] == undefined) {
//          return true;
//      }
//       let [r, c] = visit[0];
//       let t = [Math.floor(r / 3), Math.floor(c / 3)];
//       for (let dig = 1; dig < 10; dig++) {
//           dig = String(dig);
//           if (!(rows[r].has(dig)) && !(cols[c].has(dig)) && !(triples[t].has(dig))) {
//               board[r][c] = dig;
//               rows[r].add(dig);
//               cols[c].add(dig);
//               triples[t].add(dig);
//               visit.shift();
//               if (dfs()) {
//                   return true;
//               }
//               else {
//                   board[r][c] = ".";
//                   rows[r].delete(dig);
//                   cols[c].delete(dig);
//                   triples[t].delete(dig);
//                   visit.unshift([r, c]);
//               }
//           }
//       }
//       return false;
//   }
//   dfs();
// };

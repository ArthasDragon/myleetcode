/**
 *  Sudoku Solver
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//version  1
let solveSudoku = function(board) {
  let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let allChoose = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (num !== ".") {
        boxes[boxIndex][num] = rows[i][num] = cols[j][num] = true;
        boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;

        rows[i]["len"] = (rows[i]["len"] || 0) + 1;
        cols[j]["len"] = (cols[j]["len"] || 0) + 1;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (num === ".") {
        let tempArr = allChoose.filter(
          item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
        );
        board[i][j] = tempArr.length === 1 ? tempArr[0] : tempArr;
        if (tempArr.length === 1) {
          boxes[boxIndex][tempArr[0]] = rows[i][tempArr[0]] = cols[j][
            tempArr[0]
          ] = true;
          boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
          rows[i]["len"] = (rows[i]["len"] || 0) + 1;
          cols[j]["len"] = (cols[j]["len"] || 0) + 1;
        }
      }
    }
  }
};

let trySudoResolve = function(board, rows, cols, boxes) {
  let hasChange = false;

  while (
    !(
      rows.every(row => row.len === 9) &&
      cols.every(col => col.len === 9) &&
      boxes.every(box => box.len === 9)
    )
  ) {
    hasChange = false;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        compareRow(board, i, j, boxes, rows, cols);
        compareBox(board, i, j, boxes, rows, cols);
        compareCol(board, i, j, boxes, rows, cols);
        let num = board[i][j];
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (Array.isArray(num)) {
          let tempArr = num.filter(
            item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
          );
          hasChange = hasChange || num.every(n => tempArr.includes(n));
          board[i][j] = tempArr.length === 1 ? tempArr[0] : tempArr;
          if (tempArr.length === 1) {
            boxes[boxIndex][tempArr[0]] = rows[i][tempArr[0]] = cols[j][
              tempArr[0]
            ] = true;
            boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
            rows[i]["len"] = (rows[i]["len"] || 0) + 1;
            cols[j]["len"] = (cols[j]["len"] || 0) + 1;
          }
        }
      }
    }
    if (!hasChange) {
      if (isValidSudoku(board)) {
        for (let i = 0; i < 9; i++) {
          for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (Array.isArray(num)) {
              num.forEach(item => {
                board[i][j] = item;
                trySudoResolve(board, rows, cols, boxes);
              });
            }
          }
        }
      } else {
        return false;
      }
    }
  }
};

let isValidSudoku = function(board) {
  let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (!Array.isArray(num)) {
        if (boxes[boxIndex][num] || rows[i][num] || cols[j][num]) {
          return false;
        }
        boxes[boxIndex][num] = rows[i][num] = cols[j][num] = true;
      }
    }
  }

  return true;
};

let compareRow = function(board, i, j, boxes, rows, cols) {
  let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  let num = board[i][j];
  if (Array.isArray(num)) {
    let tempArr = num.filter(
      item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
    );
    let tempCountMap = {};
    tempArr.forEach(item => {
      tempCountMap[item] = 1;
    });
    for (let k = 0; k < 9; k++) {
      if (k !== j) {
        let curNum = board[i][k];
        if (Array.isArray(curNum)) {
          curNum.forEach(item => {
            if (tempCountMap[item]) {
              delete tempCountMap[item];
            }
          });
        }
      }
    }
    if (Object.keys(tempCountMap).length === 1) {
      let resNum = Object.keys(tempCountMap)[0];
      board[i][j] = resNum;
      boxes[boxIndex][resNum] = rows[i][resNum] = cols[j][resNum] = true;
      boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
      rows[i]["len"] = (rows[i]["len"] || 0) + 1;
      cols[j]["len"] = (cols[j]["len"] || 0) + 1;
    }
  }
};

let compareCol = function(board, i, j, boxes, rows, cols) {
  let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  let num = board[i][j];
  if (Array.isArray(num)) {
    let tempArr = num.filter(
      item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
    );
    let tempCountMap = {};
    tempArr.forEach(item => {
      tempCountMap[item] = 1;
    });
    for (let k = 0; k < 9; k++) {
      if (k !== i) {
        let curNum = board[k][j];
        if (Array.isArray(curNum)) {
          curNum.forEach(item => {
            if (tempCountMap[item]) {
              delete tempCountMap[item];
            }
          });
        }
      }
    }
    if (Object.keys(tempCountMap).length === 1) {
      let resNum = Object.keys(tempCountMap)[0];
      board[i][j] = resNum;
      boxes[boxIndex][resNum] = rows[i][resNum] = cols[j][resNum] = true;
      boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
      rows[i]["len"] = (rows[i]["len"] || 0) + 1;
      cols[j]["len"] = (cols[j]["len"] || 0) + 1;
    }
  }
};

let compareBox = function(board, i, j, boxes, rows, cols) {
  let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  let num = board[i][j];
  if (Array.isArray(num)) {
    let tempArr = num.filter(
      item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
    );
    let tempCountMap = {};
    tempArr.forEach(item => {
      tempCountMap[item] = 1;
    });
    let startRow = Math.floor(boxIndex / 3) * 3;
    let startCol = (boxIndex % 3) * 3;
    for (let k = startRow; k < startRow + 3; k++) {
      for (let l = startCol; l < startCol + 3; l++) {
        if (k !== i || l !== j) {
          let curNum = board[k][l];
          if (Array.isArray(curNum)) {
            curNum.forEach(item => {
              if (tempCountMap[item]) {
                delete tempCountMap[item];
              }
            });
          }
        }
      }
    }

    if (Object.keys(tempCountMap).length === 1) {
      let resNum = Object.keys(tempCountMap)[0];
      board[i][j] = resNum;
      boxes[boxIndex][resNum] = rows[i][resNum] = cols[j][resNum] = true;
      boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
      rows[i]["len"] = (rows[i]["len"] || 0) + 1;
      cols[j]["len"] = (cols[j]["len"] || 0) + 1;
    }
  }
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

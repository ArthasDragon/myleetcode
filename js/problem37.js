/**
 *  Sudoku Solver
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//version  1
// let solveSudoku = function(board) {
//     let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
//     let cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
//     let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
//     let allChoose = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         let num = board[i][j];
//         let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//         if (num !== ".") {
//           boxes[boxIndex][num] = rows[i][num] = cols[j][num] = true;
//           boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;

//           rows[i]["len"] = (rows[i]["len"] || 0) + 1;
//           cols[j]["len"] = (cols[j]["len"] || 0) + 1;
//         }
//       }
//     }

//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         let num = board[i][j];
//         let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//         if (num === ".") {
//           let tempArr = allChoose.filter(
//             item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
//           );
//           board[i][j] = tempArr.length === 1 ? tempArr[0] : tempArr;
//           if (tempArr.length === 1) {
//             boxes[boxIndex][tempArr[0]] = rows[i][tempArr[0]] = cols[j][
//               tempArr[0]
//             ] = true;
//             boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
//             rows[i]["len"] = (rows[i]["len"] || 0) + 1;
//             cols[j]["len"] = (cols[j]["len"] || 0) + 1;
//           }
//         }
//       }
//     }

//     while (
//       !(
//         rows.every(row => row.len === 9) &&
//         cols.every(col => col.len === 9) &&
//         boxes.every(box => box.len === 9)
//       )
//     ) {
//       for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//           let num = board[i][j];
//           let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//           if (Array.isArray(num)) {
//             let tempArr = num.filter(
//               item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
//             );
//             board[i][j] = tempArr.length === 1 ? tempArr[0] : tempArr;
//             if (tempArr.length === 1) {
//               boxes[boxIndex][tempArr[0]] = rows[i][tempArr[0]] = cols[j][
//                 tempArr[0]
//               ] = true;
//               boxes[boxIndex]["len"] = (boxes[boxIndex]["len"] || 0) + 1;
//               rows[i]["len"] = (rows[i]["len"] || 0) + 1;
//               cols[j]["len"] = (cols[j]["len"] || 0) + 1;
//             }
//           }
//         }
//       }
//     }
//   };

//version  2
let solveSudoku = function(board) {
  let rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  let allChoose = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let lastChangeRowIndexes = [];
  let lastChangeColIndexes = [];
  let lastChangeBoxIndexes = [];

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

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      doSth(
        boxIndex,
        i,
        j,
        board,
        lastChangeBoxIndexes,
        lastChangeColIndexes,
        lastChangeRowIndexes,
        boxes,
        rows,
        cols
      );
    }
  }

  while (
    !(
      rows.every(row => row.len === 9) &&
      cols.every(col => col.len === 9) &&
      boxes.every(box => box.len === 9)
    )
  ) {
    let tempChangeBoxIndexes = [];
    let tempChangeColIndexes = [];
    let tempChangeRowIndexes = [];

    lastChangeBoxIndexes.forEach(boxIndex => {
      let startRow = Math.floor(boxIndex / 3) * 3;
      let startCol = (boxIndex % 3) * 3;
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          doSth(
            boxIndex,
            i,
            j,
            board,
            tempChangeBoxIndexes,
            tempChangeColIndexes,
            tempChangeRowIndexes,
            boxes,
            rows,
            cols
          );
        }
      }
    });
    lastChangeColIndexes.forEach(colIndex => {
      for (let i = 0; i < 9; i++) {
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(colIndex / 3);
        doSth(
          boxIndex,
          i,
          colIndex,
          board,
          tempChangeBoxIndexes,
          tempChangeColIndexes,
          tempChangeRowIndexes,
          boxes,
          rows,
          cols
        );
      }
    });
    tempChangeRowIndexes.forEach(rowIndex => {
      for (let j = 0; j < 9; j++) {
        let boxIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(j / 3);
        doSth(
          boxIndex,
          rowIndex,
          j,
          board,
          tempChangeBoxIndexes,
          tempChangeColIndexes,
          tempChangeRowIndexes,
          boxes,
          rows,
          cols
        );
      }
    });
    if (
      tempChangeBoxIndexes.length ||
      tempChangeColIndexes.length ||
      tempChangeRowIndexes.length
    ) {
      console.log(
        lastChangeBoxIndexes,
        lastChangeColIndexes,
        lastChangeRowIndexes
      );
    }
    lastChangeBoxIndexes = tempChangeBoxIndexes;
    lastChangeColIndexes = tempChangeColIndexes;
    lastChangeRowIndexes = tempChangeRowIndexes;
  }

  return board;
};

let doSth = function(
  boxIndex,
  i,
  j,
  board,
  ChangeBoxIndexes,
  ChangeColIndexes,
  ChangeRowIndexes,
  boxes,
  rows,
  cols
) {
  let num = board[i][j];
  if (Array.isArray(num)) {
    let tempArr = num.filter(
      item => !boxes[boxIndex][item] && !rows[i][item] && !cols[j][item]
    );
    board[i][j] = tempArr.length === 1 ? tempArr[0] : tempArr;
    if (tempArr.length === 1) {
      ChangeBoxIndexes.push(boxIndex);
      ChangeColIndexes.push(j);
      ChangeRowIndexes.push(i);
      boxes[boxIndex][tempArr[0]] = rows[i][tempArr[0]] = cols[j][
        tempArr[0]
      ] = true;
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

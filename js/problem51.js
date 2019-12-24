/**
 * @param {number} n
 * @return {string[][]}
 */

// my initial solution
var solveNQueens = function(n) {
  let res = [];
  /**
   *
   * @param {array} preCol 上层权限数组
   * @param {number} i 目前进行到第几层  从0开始
   * @param {Object} obj 前面几层已经确定Q的位置
   */
  let dps = (preCol, i, obj) => {
    // 如果i能到达n  证明已经通过最后一层  记录到res中并返回
    if (i === n) {
      res.push(obj);
      return;
    }

    let curCol = new Array(n).fill(0);
    preCol.forEach((item, index) => {
      // 权限表示方法  1 - 向左下  2 - 竖直向下  4 - 右下  复合为相加
      //  根据上层col 给本层col计算 赋值  最后本层权限为0的位置才可以放置Q
      switch (item) {
        case 1:
          index > 0 && (curCol[index - 1] += 1);
          break;
        case 2:
          curCol[index] += 2;
          break;
        case 3:
          index > 0 && (curCol[index - 1] += 1);
          curCol[index] += 2;
          break;
        case 4:
          index < n - 1 && (curCol[index + 1] += 4);
          break;
        case 5:
          index > 0 && (curCol[index - 1] += 1);
          index < n - 1 && (curCol[index + 1] += 4);
          break;
        case 6:
          curCol[index] += 2;
          index < n - 1 && (curCol[index + 1] += 4);
          break;
        case 7:
          index > 0 && (curCol[index - 1] += 1);
          curCol[index] += 2;
          index < n - 1 && (curCol[index + 1] += 4);
          break;
      }
    });

    // 遍历本层计算后的col  如果该位置为0  放置Q  记录位置并进行下一层
    curCol.forEach((item, index) => {
      let tempCol = [...curCol];
      if (item === 0) {
        obj[i] = index;
        tempCol[index] = 7;
        dps(tempCol, i + 1, { ...obj });
      }
    });
  };
  dps([], 0, {});

  //  根据res 返回特定结构数据
  return res.map(obj => {
    let arr = new Array(n);
    Object.entries(obj).forEach(k_v => {
      let [key, value] = k_v;
      arr[key] = ".".repeat(value) + "Q" + ".".repeat(n - value - 1);
    });
    return arr;
  });
};

/**
 * @param {number} n
 * @return {string[][]}
 */

// online other better solution
// var solveNQueens = function(n) {
//   let result = new Array(n);
//  let results = [];
//  let dfs = (row,column) => {// 对特定行列进行验证，向上每行依次排查
//      let leftColumn =  column-1;
//      let rightColumn = column+1;
//      for(let i = row - 1;i >= 0;i--){
//          if(result[i] == column){
//              return false;
//          }
//          if(leftColumn >= 0 && result[i] == leftColumn){
//              return false;
//          }
//          if(rightColumn < n && result[i] == rightColumn){
//              return false;
//          }
//          leftColumn--;
//          rightColumn++;
//      }
//      return true;
//  }
//  let Nqueens = (row) => {
//      if(row == n){//到n证明每一行都有Q放置  将当前结果result存入results中
//          results.push(result.map(c=>'.'.repeat(c)+'Q'+'.'.repeat(n-1-c)));
//          return;
//      }
//      for(let j = 0;j < n;j++){
//          if(dfs(row,j)){//对当前行的每一列进行验证  如果可放Q则放置并进行下一列
//              result[row] = j;
//              Nqueens(row+1)
//          }
//      }
//  }
//  Nqueens(0);
//  return results;

// };

/**
 * Word Search
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 网上思路 https://leetcode-cn.com/problems/word-search/solution/shou-hua-tu-jie-79-dan-ci-sou-suo-dfs-si-lu-de-cha/
var exist = function(board, word) {
  const rowNum = board.length; // 行数
  const colNum = board[0].length; // 列数

  /**
   * 剪枝递归
   * @param {Number} x // 当前递归的行数
   * @param {Number} y // 当前递归的列数
   * @param {Number} i // 当前已经递归到的单词字母个数
   * @param {Array} pathInfo // 当前已经递归过的路径信息
   */
  const helper = (x, y, i, pathInfo) => {
    // 如果超过边界  返回false
    if (x > rowNum || y > colNum || x < 1 || y < 1) {
      return false;
    }
    let letter = board[x - 1][y - 1]; // 当前字母

    // 如果当前字母是下一个字母
    if (letter === word[i]) {
      i++;
      // 如果所有字母都找到了  返回true
      if (i === word.length) {
        return true;
      } else {
        pathInfo.push(`${x}-${y}`);
        // 四个方向走一遍  如果已经递归过的路径中没走过的话  只要有一条返回true就返回true  否则撤回此次操作  剪枝
        if (!pathInfo.includes(`${x + 1}-${y}`)) {
          if (helper(x + 1, y, i, pathInfo)) {
            return true;
          }
        }
        if (!pathInfo.includes(`${x - 1}-${y}`)) {
          if (helper(x - 1, y, i, pathInfo)) {
            return true;
          }
        }
        if (!pathInfo.includes(`${x}-${y + 1}`)) {
          if (helper(x, y + 1, i, pathInfo)) {
            return true;
          }
        }
        if (!pathInfo.includes(`${x}-${y - 1}`)) {
          if (helper(x, y - 1, i, pathInfo)) {
            return true;
          }
        }
        pathInfo.pop();
        return false;
      }
    } else {
      // 当前字母不符合直接返回false
      return false;
    }
  };

  // 从第一行第一列开始  每个字母作为起点遍历进行一次寻路操作  其中有一个点返回true就直接返回true  否则返回false
  for (let i = 1; i <= rowNum; i++) {
    for (let j = 1; j <= colNum; j++) {
      if (helper(i, j, 0, [])) {
        return true;
      }
    }
  }
  return false;
};

export default exist;

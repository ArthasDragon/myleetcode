/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

//  看完答案之后
// 思路：动态规划   咋想到的呢
// 二维数组 i行 j列  i，j为word1、word2的长度   表示前i位word1转化到word2需要的步数
var minDistance = function(word1, word2) {
  let lenOne = word1.length;
  let lenTwo = word2.length;
  let resArr = new Array(lenOne + 1).fill(1).map(() => new Array(lenTwo + 1));

  // 初始化第一行和第一列  从零开始均为累加1
  resArr[0][0] = 0;

  for (let i = 1; i <= lenOne; i++) {
    resArr[i][0] = resArr[i - 1][0] + 1;
  }

  for (let j = 1; j <= lenTwo; j++) {
    resArr[0][j] = resArr[0][j - 1] + 1;
  }
  // 初始化完毕

  // 逐行循环  如果当前word1和word2字符相等  resArr[i][j] = resArr[i-1][j-1]
  // resArr[i-1][j-1]到resArr[i][j]需要进行替换操作
  // resArr[i-1][j]到d[i][j]需要进行删除操作。
  // resArr[i][j-1] 到d[i][j]需要进行添加操作。
  for (let i = 1; i <= lenOne; i++) {
    for (let j = 1; j <= lenTwo; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        resArr[i][j] = resArr[i - 1][j - 1];
      } else {
        resArr[i][j] =
          Math.min(resArr[i - 1][j - 1], resArr[i - 1][j], resArr[i][j - 1]) +
          1;
      }
    }
  }
  return resArr[lenOne][lenTwo];
};

export default minDistance;

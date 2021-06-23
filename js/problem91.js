/**
 * Decode Ways
 * @param {string} s
 * @return {number}
 */

// 思路是动态规划的思路  写法需要改进
const numDecodings = function(s) {
  let totalNumMap = {
    [-1]: {
      value: -1,
      total: -1
    }
  };
  let cur = 0;

  for (let i = 0; i < s.length; i++) {
    cur = +s[i]; // 记录当前字符
    // i为0时特殊判断
    if (i == 0) {
      // 第一项是0一定不符合编码
      if (cur != 0) {
        // 不是零则赋予其编码个数信息
        totalNumMap[i] = {
          value: cur,
          total: 1
        };
      } else {
        return 0;
      }
    } else {
      // 如果连续两次是0 则返回0
      if (totalNumMap[i - 1].total == 0 && totalNumMap[i - 2].total == 0) {
        return 0;
      }
      totalNumMap[i] = {
        value: cur,
        total: 0
      };
      // i不是0的情况
      // 考虑最后剩一位数和两位数的情况相加即是当前的编码数
      if (cur != 0) {
        totalNumMap[i].total += totalNumMap[i - 1].total;
        let twVal = totalNumMap[i - 1].value * 10 + totalNumMap[i].value;
        // 需要考虑上一项不是0才能组成两位数的情况
        if (twVal > 0 && twVal < 27 && totalNumMap[i - 1].value != 0) {
          totalNumMap[i].total +=
            totalNumMap[i - 2].total == -1 ? 1 : totalNumMap[i - 2].total;
        }
      } else {
        let twVal = totalNumMap[i - 1].value * 10 + totalNumMap[i].value;
        if (twVal > 0 && twVal < 27 && totalNumMap[i - 1].value != 0) {
          totalNumMap[i].total +=
            totalNumMap[i - 2].total == -1 ? 1 : totalNumMap[i - 2].total;
        }
      }
    }
  }

  return totalNumMap[s.length - 1].total;
};

export default numDecodings;

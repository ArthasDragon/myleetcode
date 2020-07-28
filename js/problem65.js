/**
 * @param {string} s
 * @return {boolean}
 */

// internet solution

// 思路： 有限状态机
var isNumber = function(s) {
  let state = 0,
    // 最终状态对应结果true or false
    finals = [0, 0, 0, 1, 0, 1, 1, 0, 1],
    // 状态跳转表
    transfer = [
      [0, 1, 6, 2, -1, -1],
      [-1, -1, 6, 2, -1, -1],
      [-1, -1, 3, -1, -1, -1],
      [8, -1, 3, -1, 4, -1],
      [-1, 7, 5, -1, -1, -1],
      [8, -1, 5, -1, -1, -1],
      [8, -1, 6, 3, 4, -1],
      [-1, -1, 5, -1, -1, -1],
      [8, -1, -1, -1, -1, -1]
    ],
    // 计算字符对应跳转第几项
    make = c => {
      switch (c) {
        case " ":
          return 0;
        case "+":
        case "-":
          return 1;
        case ".":
          return 3;
        case "e":
          return 4;
        default:
          let code = c.charCodeAt();
          if (code >= 48 && code <= 57) {
            return 2;
          } else {
            return 5;
          }
      }
    };
  // 根据状态机遍历输入的字符
  for (let i = 0; i < s.length; ++i) {
    state = transfer[state][make(s[i])];
    if (state < 0) return false;
  }
  // 返回结果
  return finals[state];
};

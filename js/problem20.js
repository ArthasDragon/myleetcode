/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  if (s === undefined || s === null) {
    return false;
  }
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }
  const obj = {
    "[": -1,
    "]": 1,
    "(": -2,
    ")": 2,
    "{": -3,
    "}": 3
  };

  //字符串转为数组
  let sArr = s.split("");

  //记录当前负数数组
  let negNums = [];

  //记录当前字符
  let curStr = "";
  while ((curStr = sArr.shift())) {
    if (obj[curStr] > 0) {
      //下一个数为正数但是负数数组中最后一项加上该正数不为0则返回false
      let preNegNum = negNums.pop();
      if (!preNegNum || preNegNum + obj[curStr] !== 0) {
        return false;
      }
    } else {
      //负数则加入数组中
      negNums.push(obj[curStr]);
    }
  }
  return !negNums.length;
};

export default isValid;

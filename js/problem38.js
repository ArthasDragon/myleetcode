/**
 * Count and Say
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
  if (n <= 1) {
    return "1";
  }

  return format(countAndSay(n - 1));
};

let format = function(str) {
  let curStr = "";
  let result = "";
  let len = str.length;
  let i = 0;
  let count = 0;
  let preStr = "";
  while (i < len) {
    curStr = str.charAt(i);
    if (curStr === preStr) {
      count++;
    } else {
      if (count !== 0) {
        result += `${count}${preStr}`;
      }
      count = 1;
    }
    preStr = curStr;
    i++;
  }
  result += `${count}${preStr}`;

  return result;
};

export default countAndSay;

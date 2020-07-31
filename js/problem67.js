/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 思路：从后往前一位位加   到较长的数终止  判断进位
var addBinary = function(a, b) {
  let res = "";
  let add = 0;
  let sum = 0;
  let aLen = a.length;
  let bLen = b.length;
  // 循环
  for (let i = 1; i <= Math.max(aLen, bLen); i++) {
    sum = (+a[aLen - i] || 0) + (+b[bLen - i] || 0) + add;
    // 每次判断进位
    add = Math.floor(sum / 2);
    res = (sum % 2) + res;
  }
  // 最后如果进位仍然是1  加到开头
  if (add === 1) {
    res = add + res;
  }
  return res;
};

export default addBinary;

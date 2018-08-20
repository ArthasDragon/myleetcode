/**
 * ZigZag Conversion
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
  if (numRows == 1) {
    return s;
  }
  let str = s.split("");
  let diff = 2 * numRows - 2;
  let result = "";
  for (let i = 0; i < numRows; ++i) {
    for (let j = i; j < s.length; j += diff) {
      result += str[j];
      if (i != 0 && i != numRows - 1) {
        if (j + 2 * (numRows - i) - 2 < s.length) {
          result += str[j + 2 * (numRows - i) - 2];
        }
      }
    }
  }
  return result;
};
export default convert;

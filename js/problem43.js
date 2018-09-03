/**
 * Multiply Strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return "0";
  }
  let result = [];

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (result[i + j] === undefined) {
        result[i + j] = num1[i] * num2[j];
      } else {
        result[i + j] += num1[i] * num2[j];
      }
    }
  }

  //处理位数上面数字超过10的情况
  result.reverse();

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10 && i != result.length - 1) {
      result[i + 1] += Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
    }
  }

  return result.reverse().join("");
};

export default multiply;

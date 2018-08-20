/**
 * Divide Two Integers   ?
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  let result = dividend / divisor;
  if (result > 2147483647) {
    result = 2147483647;
  }
  if (result < -2147483648) {
    result = -2147483648;
  }
  return result < 0 ? Math.ceil(result) : Math.floor(result);
};

export default divide;

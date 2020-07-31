/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let res = 2;
  let temp = 1;
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  for (let i = 2; i < n; i++) {
    res += temp;
    temp = res - temp;
  }
  return res;
};

export default climbStairs;

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let num = true;
  let le = ~~Math.log10(x) + 1;
  for (let i = 0; i < Math.floor(le / 2); ++i) {
    if (
      ~~((x % Math.pow(10, i + 1)) / Math.pow(10, i)) !=
      ~~(x / Math.pow(10, le - i - 1)) % 10
    ) {
      num = false;
    }
  }
  return num;
};

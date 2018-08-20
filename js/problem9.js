/**
 * Palindrome Number
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  //负数都不对称
  if (x < 0) {
    return false;
  }
  //le----x的位数
  let le = ~~Math.log10(x) + 1;
  for (let i = 0; i < Math.floor(le / 2); ++i) {
    //第一位到中间位 验证左右对应的数字是否相等   不相等则返回false
    if (
      ~~((x % Math.pow(10, i + 1)) / Math.pow(10, i)) !=
      ~~(x / Math.pow(10, le - i - 1)) % 10
    ) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let arr = str.trim().match(/^[+-]{0,1}\d+/) || []
  return arr.length ? (
    Number(arr.join('')) > 2147483647 ? 2147483647 :
      (Number(arr.join('')) < -2147483648 ? -2147483648 : Number(arr.join('')))
  ) : 0
};
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
  return new RegExp("^" + p + "$").test(s);
};

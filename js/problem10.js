/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
  if (/^*/.test(p) || /[*]{2,}/g.test(p)) {
    return false;
  }
};

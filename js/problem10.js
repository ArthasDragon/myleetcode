/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if(/^*/.test(p) || /[*]{2,}/g.test(p)){
    return false
  }

};
/**
 * Wildcard Matching
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
  if (s.length === 0) {
    return /\**/.test(p);
  }
  const sLen = s.length;
  const pLen = p.length;
  let matrix = new Array(sLen + 1);
  matrix.fill(new Array(pLen + 1));
};

export default isMatch;

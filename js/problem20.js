/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  if (s === undefined || s === null) {
    return false;
  }
  const len = s.length;
  if (len % 2 !== 0) {
    return false;
  }
  const obj = {
    "[": -1,
    "]": 1,
    "(": -2,
    ")": 2,
    "{": -3,
    "}": 3
  };
};

/**
 * Wildcard Matching
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//my solution like problem 10, use matrix
const ZERO_OR_CHARS = "*";
const ONE_ANY_CHAR = "?";
let isMatch = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  let matrix = new Array(sLen + 1);
  matrix = matrix.fill(null).map(() => {
    return new Array(pLen + 1).fill(null);
  });

  matrix[0][0] = true;
  for (let i = 1; i < pLen + 1; i++) {
    if (p.charAt(i - 1) == ZERO_OR_CHARS && matrix[0][i - 1]) {
      matrix[0][i] = true;
    } else {
      matrix[0][i] = false;
    }
  }

  for (let i = 1; i < sLen + 1; i++) {
    matrix[i][0] = false;
  }

  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      let sIndex = i - 1;
      let pIndex = j - 1;
      let pChar = p.charAt(pIndex);
      let sChar = s.charAt(sIndex);
      if (pChar === ZERO_OR_CHARS) {
        matrix[i][j] = false;
        for (let k = 0; k < i + 1; k++) {
          if (matrix[k][j - 1]) {
            matrix[i][j] = true;
          }
        }
      } else if (pChar === ONE_ANY_CHAR || pChar === sChar) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = false;
      }
    }
  }

  return matrix[sLen][pLen];
};

// isMatch("", "**");
export default isMatch;

/**
 * other's better solution
 * Wildcard Matching
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     var i = 0, j = 0
//     var idxmatch = -1, idxstart = -1
//     while(i < s.length) {
//         if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
//           i++
//           j++
//         }else if (j < p.length && p[j] === '*') {
//           idxmatch = i
//           idxstart = j
//           j++
//         }else if (idxstart !== -1) {
//           j = idxstart + 1
//           idxmatch++
//           i = idxmatch
//         }else{
//           return false
//         }
//     }
//   while(j< p.length && p[j] == '*'){
//     j++;
//   }
//   return j === p.length;
// };

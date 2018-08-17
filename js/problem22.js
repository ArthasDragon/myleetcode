/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
  if (n === 1) {
    return ["()"];
  }

  let result = [];
  for (let i = 1; i < n; i++) {
    result = result.concat(
      getArrayMultiply(removeLeft(i), generateParenthesis(n - i))
    );
  }
  result = result.concat(generateParenthesis(n - 1).map(item => `(${item})`));
  return result;
};

//去除右面n个括号
let removeLeft = function(n) {
  let result = generateParenthesis(n);
  for (let i = 1; i < n; i++) {
    result = result.filter(
      item => !generateParenthesis(i).some(itemN => item.startsWith(itemN))
    );
  }
  return result;
};

//两个数组合并
let getArrayMultiply = function(arr1, arr2) {
  let result = [];
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      result.push(item1 + item2);
    });
  });
  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
// let generateParenthesis = function(n) {
//     const results = [];
//     recurse("", n, n, results);
//     return results;

// };

/**
 * @param {string} cur  //当前已经组成的字符串
 * @param {number} i //剩余左括号个数
 * @param {number} j //剩余右括号个数
 * @param {arr} result //最终的result  所有组成后的字符串都放入这个数组中
 */
// function recurse(cur, i, j, results) {
//   if (i === 0 && j === 0) return results.push(cur);
//   if (i > 0) recurse(cur + "(", i - 1, j, results);
//   if (j >= 0 && j - 1 >= i) recurse(cur + ")", i, j - 1, results);
// }

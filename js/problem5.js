/**
 * Longest Palindromic Substring
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
  let str = s.split(""),
    len = 0,
    result = "",
    curr = "";

  //以i为中心点向两端找到对称的最长字符串
  let getTwowayLong = function(i) {
    let pre = i - 1,
      next = i + 1,
      sum1 = 1,
      sum2 = 0,
      curr1 = "",
      curr2 = "",
      pre1 = i - 1,
      next1 = i + 2;

    //以当前str为中心的前后项都存在且相等
    while (str[pre] && str[next] && str[pre] == str[next]) {
      sum1 += 2;
      pre--;
      next++;
      curr1 = s.slice(pre + 1, next);
    }

    //当前str和下一个相等时以这两项为中心发散去最大对称
    if (str[i + 1] && str[i] == str[i + 1]) {
      sum2 = 2;
      curr2 = s.slice(i, i + 2);
      while (str[pre1] && str[next1] && str[pre1] == str[next1]) {
        sum2 += 2;
        curr2 = s.slice(pre1, next1 + 1);
        pre1--;
        next1++;
      }
    }
    if (sum1 != 1 || sum2 != 0) {
      if (sum1 > sum2) {
        curr = curr1;
        return sum1;
      } else {
        curr = curr2;
        return sum2;
      }
    }
    return 0;
  };
  //遍历每一个点   向两端找最长对称字符串
  str.map((item, index) => {
    let cur_len = getTwowayLong(index);
    if (cur_len && cur_len > len) {
      len = cur_len;
      result = curr;
    }
  });
  return (len == 0 ? str[0] : result) || "";
};

export default longestPalindrome;

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   var array = s.split(""),
//     left,
//     right,
//     arraySize = array.length,
//     max = 0,
//     start = 0;

//   for (var i = 0; i < arraySize; i = i + 0.5) {
//     left = Math.ceil(i - 1);
//     right = Math.floor(i + 1);
//     while (left >= 0 && right < arraySize) {
//       if (array[left] === array[right]) {
//         left--;
//         right++;
//       } else {
//         break;
//       }
//     }

//     if (right - left - 1 > max) {
//       max = right - left - 1;
//       start = left + 1;
//     }
//   }

//   return s.slice(start, start + max);
// };

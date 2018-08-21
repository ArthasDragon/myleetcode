/**
 * Substring with Concatenation of All Words
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
let findSubstring = function(s, words) {
  if (!s || !words.length) {
    return [];
  }
  let wordLength = words[0].length; //每个单词长度
  let wordListLength = words.length;
  let strLength = s.length;

  //长度不够长  直接返回[]
  if (strLength < wordLength * wordListLength) {
    return [];
  }
  //记录words中各个word在words中出现的次数
  let wordCountMap = {};
  words.forEach(word => {
    wordCountMap[word] = wordCountMap[word] ? wordCountMap[word] + 1 : 1;
  });

  let result = [];
  let deleteRepeatWords = Object.keys(wordCountMap);

  //将每个长度中的数值作为起始数值  向后每隔wordLength进行一次判断操作
  for (let i = 0; i < wordLength; ++i) {
    let left = i; //记录当前起始点
    let right = i; //记录当前判断到达index
    let tempCountMap = {}; //记录当前已经匹配的信息
    let matchWordsLength = 0; //记录已经匹配的单词个数

    //边界条件
    while (
      right <= strLength - wordLength &&
      left + wordLength * wordListLength <= strLength
    ) {
      let matchedWord = s.slice(right, right + wordLength); //当前待判断word

      //判断当前单词不在words中则置空并将下标移动到当前并重新循环
      if (!deleteRepeatWords.includes(matchedWord)) {
        tempCountMap = {};
        matchWordsLength = 0;
        right += wordLength;
        left = right;
        continue;
      }

      //matchedWord 个数之前已经符合要求  本次超出  则left右移wordLength重新循环
      if (
        tempCountMap[matchedWord] &&
        tempCountMap[matchedWord] === wordCountMap[matchedWord]
      ) {
        tempCountMap = {};
        matchWordsLength = 0;
        while (!s.slice(left, left + wordLength) === matchedWord) {
          left += wordLength;
        }
        left += wordLength;
        right = left;
        continue;
      }
      tempCountMap[matchedWord] = tempCountMap[matchedWord]
        ? tempCountMap[matchedWord] + 1
        : 1;
      right += wordLength;
      matchWordsLength++;

      //已经匹配的单词数量和words数量相等则匹配成功
      if (matchWordsLength === words.length) {
        result.push(left);
        tempCountMap = {};
        matchWordsLength = 0;
        left += wordLength;
        right = left;
        continue;
      }
    }
  }

  return result;
};

export default findSubstring;

//other's better solution
// var findSubstring = function(s, words) {
//   if (s === "" || words.length == 0) return [];

//   // Initialize and define import values
//   let wordLength = words[0].length,
//       wordListLength = words.length,
//       subStrLength = wordListLength * wordLength,
//       strLength = s.length;

//   // Handle a 100% failure
//   if (strLength < subStrLength) return [];

//   // Construct the word map
//   // And find the substring value to find
//   let wordCountMap = {};
//   for (let word of words)
//       wordCountMap[word] = word in wordCountMap ? wordCountMap[word] + 1 : 1

//   // Iteration for to find substrings which contains the exactly same number of every word in wordCountMap
//   let res = [];
//   for (let i = 0; i < wordLength; i ++) {
//       let left = i,
//           right = i;
//       let newWordCountMap = {};
//       while (right < strLength - wordLength + 1) {
//           let currWord = s.slice(right, right + wordLength);
//           if (!(currWord in wordCountMap)) {
//               newWordCountMap = {};
//               right += wordLength;
//               left = right;
//           } else {
//               newWordCountMap[currWord] = currWord in newWordCountMap ? newWordCountMap[currWord] + 1 : 1;
//               right += wordLength;
//               if (newWordCountMap[currWord] > wordCountMap[currWord]) {
//                   while (left < right) {
//                       newWordCountMap[s.slice(left, left + wordLength)] --;
//                       left += wordLength;
//                       if (s.slice(left - wordLength, left) === currWord) break;
//                   }
//               }

//               if (right - left === subStrLength) {
//                   res.push(left);
//                   newWordCountMap[s.slice(left, left + wordLength)] --;
//                   left += wordLength;
//               }
//           }
//       }
//   }

//   return res;
// };

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = [];
  let tempArr = [];
  let firstWord = words.shift();
  let sum = 0;
  while (firstWord) {
    // 如果是某行第一个单词
    if (sum === 0) {
      sum += firstWord.length;
    } else if (sum + firstWord.length + 1 > maxWidth) {
      sum = 0;
      // 判断到最大长度进行处理  并清空数据
      res.push(handleTempArr(tempArr, maxWidth));
      tempArr = [];
      continue;
    } else {
      // 没到最大长度且不是第一个单词则将单词前面加一个空格放入临时数组中
      sum += firstWord.length + 1;
      firstWord = " " + firstWord;
    }
    tempArr.push(firstWord);
    // 取下一个单词继续循环
    firstWord = words.shift();
  }

  // 最后有单词单独处理
  if (tempArr.length) {
    let substractNum = maxWidth - tempArr.join("").length;

    res.push(tempArr.join("") + new Array(substractNum).fill(" ").join(""));
  }
  return res;
};

// tempArr  第一个单词无空格   后续每个单词前面有一个空格
// 该方法将tempArr中单词加空格到总长度等于最大长度为止
const handleTempArr = (tempArr, maxWidth) => {
  // 当前总长度和最大长度的cha
  let substractNum = maxWidth - tempArr.join("").length;
  // 单词数
  let wordNum = tempArr.length;

  // 如果单词数是1  则直接在该单词后面加空格
  if (wordNum === 1) {
    tempArr[0] += new Array(substractNum).fill(" ").join("");
    return tempArr.join("");
  }

  // 每个单词需要加的公共空格数
  // n个单词只有n-1个空位
  let roundNum = Math.floor(substractNum / (wordNum - 1));

  // 从第一个单词开始   在每个单词后面加入对应空位需要加的数量的空格
  for (let i = 0; i < wordNum - 1; i++) {
    tempArr[i] += new Array(
      roundNum + (substractNum % (wordNum - 1) > i ? 1 : 0)
    )
      .fill(" ")
      .join("");
  }

  return tempArr.join("");
};

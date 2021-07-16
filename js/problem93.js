/**
 *  Restore IP Addresses
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
  let res = [];

  // 特殊情况判断
  if (s.length > 12) {
    return [];
  }

  // 路径规划算法
  const helper = (path, i) => {
    // 上一个组合后的数字
    let lastNum = path[path.length - 1] || "";
    let curAlpha = s[i]; // 当前数字
    // 如果剩余的数字个数大于最长的数字数则直接返回  不用再判断后续的了
    if ((s.substr(i) + lastNum).length / 3 > 5 - (path.length || 1)) {
      return;
    }

    // 结束条件  当走到最后一个数的时候判断符合不符合ip规则  将符合的加入到res中
    if (i == s.length - 1) {
      // 如果正好差一个数  则直接加入即可
      if (path.length == 3) {
        res.push(path.concat([curAlpha]).join("."));
        return;
      } else if (path.length == 4) {
        // 如果前面已经有四个数了  则判断最后一个加完当前的数字之后是否符合   符合则加入res
        if (lastNum != 0) {
          if (lastNum + curAlpha <= 255) {
            path[path.length - 1] = lastNum + curAlpha;
            res.push(path.join("."));
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    }

    // 如果路径中有值
    if (lastNum.length) {
      // 根据上一个数是否是0进行不同的判断  进行后续操作
      if (lastNum != 0) {
        // 如果上一个数不是0  则有两种路线  一种直接把当前数字放到下一个位置
        helper(path.concat([curAlpha]), i + 1);

        // 另一种将当前数加入到上一个数的末尾
        if (lastNum + curAlpha <= 255) {
          path[path.length - 1] = lastNum + curAlpha;
          helper(path, i + 1);
        }
      } else {
        // 如果上一个数是0  则直接将当前数字放到下一个位置继续
        helper(path.concat([curAlpha]), i + 1);
      }
    } else {
      // 如果刚开始则把当前数放到第一个位置继续
      helper(path.concat([curAlpha]), i + 1);
    }
  };

  helper([], 0);

  return res;
};

export default restoreIpAddresses;

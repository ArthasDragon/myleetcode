/**
 * Unique Binary Search Trees
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  let cacheObj = {}; // 缓存  节省时间
  // start到end的树的个数
  const helper = (start, end) => {
    // 边界条件
    if (start == end) {
      return 1;
    }
    if (start > end) {
      return 1;
    }
    let res = 0;
    // 从头到尾每一个数作为根节点的树的和即为结果（有缓存则直接取缓存）
    for (let i = start; i <= end; i++) {
      res +=
        (cacheObj[`${start}-${i - 1}`] || helper(start, i - 1)) *
        (cacheObj[`${i + 1}-${end}`] || helper(i + 1, end));
    }
    // 存入缓存中
    cacheObj[`${start}-${end}`] = res;
    return res;
  };

  return helper(1, n);
};

export default numTrees;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 每层进行递归
const levelOrder = function(root) {
  let result = []; // 结果数组
  let helper = arr => {
    let res = []; // 记录当前层的值
    let next = []; // 记录下一层的node
    if (!arr.length) {
      return [];
    }
    // 遍历当前层节点， 记录值和下层有值的node
    while (arr.length) {
      let first = arr.shift();
      if (!first) {
        return [];
      }
      res.push(first.val);
      if (first.left) {
        next.push(first.left);
      }
      if (first.right) {
        next.push(first.right);
      }
    }

    // 遍历之后将当前层的值数组加入到结果数组中
    result.push(res);
    return [[res], ...helper(next)];
  };
  helper([root]);

  return result;
};

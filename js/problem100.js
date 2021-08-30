/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  // 如果至少有一个为null
  if (!p || !q) {
    if (!p && !q) {
      return true;
    } else {
      return false;
    }
  }

  // 值不相等直接返回false
  if (p.val != q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

export default isSameTree;

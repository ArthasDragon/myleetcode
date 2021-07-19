/**
 * Binary Tree Inorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  let res = []; // 结果数组
  // 空的时候
  if (!(root && root.val)) {
    return res;
  }
  // 左中右递归即可
  return inorderTraversal(root.left)
    .concat([root.val])
    .concat(inorderTraversal(root.right));
};

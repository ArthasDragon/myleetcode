/**
 * Validate Binary Search Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  /**
   *
   * @param {TreeNode} rootNode 根节点
   * @param {Number} min 此树的最小值限制
   * @param {Number} max 此树的最大值限制
   * @returns
   */
  let helper = (rootNode, min, max) => {
    if (!rootNode) {
      return true;
    }
    // 验证左子节点值满足 且右子节点值满足  且左右子树都符合即可
    return (
      (!rootNode.left ||
        (rootNode.left.val < rootNode.val &&
          (!min || rootNode.left.val > min))) &&
      (!rootNode.right ||
        (rootNode.right.val > rootNode.val &&
          (!max || rootNode.right.val < max))) &&
      helper(rootNode.left, min, rootNode.val) &&
      helper(rootNode.right, rootNode.val, max)
    );
  };

  return helper(root);
};

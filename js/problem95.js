/**
 * Unique Binary Search Trees II
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/* eslint-disable */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function(n) {
  let res = []; // 结果数组

  // 返回结果的时候需要克隆一份新的树返回
  function cloneTree(rootNode) {
    let resNode = new TreeNode(rootNode.val, rootNode.left, rootNode.right);
    if (resNode.left) {
      resNode.left = cloneTree(resNode.left);
    }
    if (resNode.right) {
      resNode.right = cloneTree(resNode.right);
    }
    return resNode;
  }

  // 遍历方法
  const helper = (rootNode, rightNode, preNode, i) => {
    if (i > n) {
      // 如果已经遍历完了   添加到结果中
      res.push(cloneTree(rootNode));
    } else {
      // 第一种情况 直接将现在的节点加到上次的根节点的上面作为新的根节点
      let curNode = new TreeNode(i);
      curNode.left = rootNode;
      helper(curNode, curNode, null, i + 1);
      curNode.left = null;

      // 第二种情况  将现在的节点插入右边的某一个位置  将改位置右下的子树作为现在节点的左子树
      let lastRight = rootNode;
      let tmpRight = rootNode.right;
      while (tmpRight && tmpRight != rightNode) {
        curNode.left = tmpRight;
        lastRight.right = curNode;
        helper(rootNode, curNode, lastRight, i + 1);
        lastRight.right = tmpRight;
        curNode.left = null;
        lastRight = tmpRight;
        tmpRight = lastRight.right;
      }

      // 第三种情况  上次的最后的节点作为现在节点的左子节点
      if (preNode) {
        preNode.right = curNode;
        curNode.left = rightNode;
        helper(rootNode, curNode, preNode, i + 1);
        preNode.right = rightNode;
        curNode.left = null;
      }
      // 最后一种情况  现在的节点作为上次节点的右子节点
      rightNode.right = curNode;
      helper(rootNode, curNode, rightNode, i + 1);
      rightNode.right = null;
    }
  };
  // 遍历开始
  let root = new TreeNode(1);
  helper(root, root, null, 2);
  return res;
};

export default generateTrees;
/* eslint-disable */

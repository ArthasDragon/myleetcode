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
 * @return {boolean}
 */
const isSymmetric = function(root) {
  // 存储当前节点的栈
  let arr = [];

  // 特殊初始条件判断
  if (!root.left || !root.right) {
    return !root.left && !root.right;
  }

  // 判断第二层
  if (root.left.val == root.right.val) {
    // 第二层节点放入栈中
    arr.unshift(root.left);
    arr.push(root.right);

    while (arr.length) {
      // 需要比较的两个对称节点
      let leftNode = arr.shift();
      let rightNode = arr.pop();

      // 按情况加入栈中
      if (leftNode.left && rightNode.right) {
        if (leftNode.left.val != rightNode.right.val) {
          return false;
        }
        arr.unshift(leftNode.left);
        arr.push(rightNode.right);
      } else {
        if (!(!leftNode.left && !rightNode.right)) {
          return false;
        }
      }

      if (leftNode.right && rightNode.left) {
        if (leftNode.right.val != rightNode.left.val) {
          return false;
        }
        arr.unshift(leftNode.right);
        arr.push(rightNode.left);
      } else {
        if (!(!leftNode.right && !rightNode.left)) {
          return false;
        }
      }
    }
    // 栈中没有项则全部匹配返回true
    return true;
  } else {
    return false;
  }
};

export default isSymmetric;

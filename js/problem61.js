/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let curNode = head;
  let nodeList = [head];
  // 判断空值
  if (!curNode) {
    return curNode;
  }
  // 将链表都存在数组中
  while (curNode.next) {
    curNode = curNode.next;
    nodeList.push(curNode);
  }

  // 记录链表长度  取模之后直接改变对应链表项的next值即可
  let len = nodeList.length;
  k = k % len;
  if (k === 0) {
    return nodeList[0];
  }
  nodeList[len - 1].next = nodeList[0];
  nodeList[len - k - 1].next = null;
  return nodeList[len - k];
};

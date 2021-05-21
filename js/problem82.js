/**
 * Remove Duplicates from Sorted List II
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let preNode = null; // 记录上一个链表项
  let curNode = null; // 当前链表项
  let curValue = null; // 当前遍历记录值

  // 边界判断
  if (!head || !head.next) {
    return head;
  }
  curNode = head.next;
  curValue = head.val;
  // 依次遍历  当curNode存在时进行比较
  while (curNode) {
    // 出现重复值的时候
    if (curNode.val == curValue) {
      if (preNode) {
        preNode.next = curNode.next;
        curNode = curNode.next;
      } else {
        head = curNode.next;
        curNode = curNode.next;
      }
    } else {
      // 下一个不是重复值的时候   需要验证下下个
      curValue = curNode.val;
      curNode = curNode.next;
      preNode =
        preNode &&
        preNode.next &&
        preNode.next.next &&
        preNode.next.val != preNode.next.next.val
          ? preNode.next
          : preNode || (head.next && head.val != head.next.val ? head : null);
    }
  }
  return head;
};

export default deleteDuplicates;

// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/shan-chu-pai-xu-lian-biao-zhong-de-zhong-0oae/

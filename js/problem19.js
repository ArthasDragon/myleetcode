/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  //链表每一项将要组成的数组
  let list = [];
  //将链表一次放入数组list中
  while (head.next) {
    list.push(head);
    head = head.next;
  }
  list.push(head);

  //记录将要删除的数组下标
  let i = list.length - n;

  //处理链表后删除数组中该项并返回链表第一项
  if (i === 0) {
    list[0].next = null;
  } else {
    list[i - 1].next = list[i + 1];
    list[i].next = null;
  }
  list.splice(i, 1);
  return list[0] || [];
};

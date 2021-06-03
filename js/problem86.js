/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Partition List
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// 第一反应  双指针
let partition = function(head, x) {
  let first = null; // 第一个指针
  let second = head; // 第二个指针

  // 边界条件
  if (!head) {
    return head;
  }
  // 确定两个指针的初始位置
  // 链表中第一个大于等于x的项为second前一项为first
  while (second) {
    if (second.val >= x) {
      break;
    } else {
      first = second;
      second = second.next;
    }
  }

  // 将second后面的所有小于x的项放到first后面并更新位置关系
  while (second && second.next) {
    let nextNode = second.next;

    // 遇到小于x的项进行操作
    if (nextNode.val < x) {
      if (first) {
        second.next = nextNode.next;
        nextNode.next = first.next;
        first.next = nextNode;
        first = nextNode;
      } else {
        second.next = nextNode.next;
        nextNode.next = head;
        first = nextNode;
      }
      // 判断当前的head  如果>=x 需要重置为当前的第一个< x的项
      if (head.val >= x) {
        head = nextNode;
      }
    } else {
      second = nextNode;
    }
  }

  return head;
};

// export default partition

// 链头 + 数组 + 双指针 + Fiber
// https://leetcode-cn.com/problems/partition-list/solution/lian-tou-shu-zu-shuang-zhi-zhen-7xing-da-baxz/

/* 
148. Sort List

Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
 

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
*/

/**
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
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/* //! Initial solution with space complexity of O(n) and time complexity O(n*logn); uses arrays of values from linked list nodes, sorts them, and then creates a new linked list;
const sortList = function (head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let curr: ListNode | null = head,
    arr: number[] = [];

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  arr.sort((a, b) => a - b);
  let node = new ListNode(arr[0]);
  head = node;
  let temp = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    temp.next = newNode;
    temp = temp.next;
  }

  return head;
};
*/

//! Solution using an array of nodes: less space complexity compared to the previous solution, yet still O(n); the solution is more laconic as well
/*
const sortList = function (head: ListNode | null): ListNode | null {
  if (!head) return null;

  const nodes: ListNode[] = [];

  while (head) {
    nodes.push(head);
    head = head.next;
  }

  nodes.sort((a, b) => a.val - b.val);

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[i + 1] || null;
  }

  return nodes[0];
};
*/

//! Solution with Merge Sort:
const merge = (
  left: ListNode | null,
  right: ListNode | null
): ListNode | null => {
  const dummy = new ListNode(0);
  let current = dummy;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  current.next = left || right;

  return dummy.next;
};

const sortList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  const left = sortList(head);
  const right = sortList(slow);

  return merge(left, right);
};

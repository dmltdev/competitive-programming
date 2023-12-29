/*
143. Reorder List

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  if (!head) return;

  const arr: ListNode[] = [];
  let curr: ListNode | null = head;

  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  let i = 0;
  const halfLength = Math.floor(arr.length / 2);

  while (i < halfLength) {
    [arr[i].next, arr[arr.length - 1 - i].next] = [
      arr[arr.length - 1 - i],
      arr[i].next,
    ];
    i++;
  }

  arr[halfLength].next = null;
}

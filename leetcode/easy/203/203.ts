/* 
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Iterative approach
function removeElements(head: ListNode | null, val: number): ListNode | null {
   if (!head) return null;

   let curr: ListNode = head;

   while (head && head.val === val) {
     head = head.next;
   }

   while (curr && curr.next) {
     if (curr.next.val === val) {
       curr.next = curr.next.next
     } else {
       curr = curr.next
     }
   }

   return head;
 }

// Recursive approach
function removeElements_recursive(head: ListNode | null, val: number): ListNode | null {
  // base case: reached end of list
  if (head === null) return null
  // decision point: should we keep this this node?
  if (head.val === val) {
     // skip current node, return cleaned tail
     return removeElements(head.next, val)
  }
  // keep current node, attach cleaned tail
  return (head.next = removeElements(head.next, val), head) 
};

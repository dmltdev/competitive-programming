/* 
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.next = next === undefined ? null : next;
  }
}

//! Initial solution using a helper function assertNode,
//! utilizing the extra ds "curr" and comparing resulting string with its reversed version to return a boolean value
/* 
function assertNode(node: ListNode | null): node is ListNode {
  return node !== null;
}

function isPalindrome(head: ListNode | null): boolean {
  let curr = head,
    nums: number[] = [];

  while (assertNode(curr)) {
    nums.push(curr.val);
    curr = curr.next;
  }

  let str: string = nums.join("");

  return str === str.split("").reverse().join("");
}
*/

function isPalindrome(head: ListNode | null): boolean {
  if (head)
  if (!head.next) return true;

  const res: number[] = [];

  while (head) {
    res.push(head.val);
    head = head.next;
  }

  return res.join("") === res.reverse().join("");
}

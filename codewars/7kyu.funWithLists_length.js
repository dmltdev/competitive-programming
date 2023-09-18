/* 
7 kyu
Fun with lists: length

Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!

*/

//! Iterative approach: more explicit control flow, easier to debug, more efficient
/*function length(head) {
  let count = 0
  let currentNode = head
  while (currentNode) {
    count++
    currentNode = currentNode.next
  }
  return count
}
*/

//! Recursive approach: more concise and elegant solution, but less efficient

function length(head) {
  if (head == null) return 0;
  return 1 + length(head.next);
}

/* 
 The function does something like this:
function length(head)

function length(head.next)

function length(head.next.next)

function length(head.next.next.next)

function length(head.next.next.next.next) ...and so on, until we hit null

With each function call we add 1. When we hit the last element of the list, which is null, 
the base condition is met if (head == null), and here the magic happens: 
as we've reached the last function call (we've reach the 'bottom' of the 'stack' of function calls), 
0 is returned from the 'bottom' (last) function call, then - going backwards, recursively, 
or going from the bottom of the 'stack' to the top of the 'stack' - every function returns a value, 
which can be added to 1 in the previous function.
*/

/*
6 kyu
Fun with lists: filter

Implement the method filter, which accepts a linked list (head) and a predicate function, and returns a new linked list (head) which only contains the elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null.

Good luck!
*/

// Iterative approach with a while loop
/*
function filter(head, p) {
  let node = head;
  let newHead = null;
  let tail = null;

  while (node !== null) {
    if (p(node.data)) {
      if (newHead === null) {
        newHead = tail = new Node(node.data);
      } else {
        tail.next = new Node(node.data);
        tail = tail.next;
      }
    }
    node = node.next;
  }
  return newHead;
}
*/

//! Recursive approach
const filter = (head, p) => {
  if (!head) return head;
  if (!p(head.data)) return filter(head.next, p);
  return new Node(head.data, filter(head.next, p));
};

/* 
Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.
*/

function indexOf(head, value) {
  if (head === null) return -1;

  let count = 0;
  let currentNode = head;
  let nextNode = null;

  while (currentNode) {
    if (currentNode.data === value) {
      return count;
    }
    nextNode = currentNode.next;
    count++;
    currentNode = nextNode;
  }

  return -1;
}

//! Tests

import LinkedList from "../dsa/singlyLinkedList.js";

let list = new LinkedList();
for (let i = 1; i < 4; i++) {
  list.push(i);
}

console.log(indexOf(list.head, 2));

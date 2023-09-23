/* 

7 kyu
Fun with lists: anyMatch + allMatch

Implement the methods anyMatch (any_match in PHP) & allMatch (all_match in PHP), 
which accepts a linked list (head) and a predicate function, 
and returns true if any / all of the elements apply to the given predicate.

For example:

Given the list: 1 -> 2 -> 3, and the predicate x => x > 1, 
anyMatch / any_match should return true (both 2 & 3 are valid for this predicate), 
and allMatch / all_match should return false (1 is not valid for this predicate)

The linked list is defined as follows:

function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/

function anyMatch(head, p) {
  let current = head;
  while (current) {
    if (p(current.data)) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function allMatch(head, p) {
  let current = head;
  while (current) {
    if (!p(current.data)) {
      return false;
    }
    current = current.next;
  }
  return true;
}

//! Tests
import LinkedList from "../dsa/linkedList.js";

let list = new LinkedList();
for (let i = 1; i < 4; i++) {
  list.push(i);
}

let predicate1 = (x) => x > 1;
console.log(anyMatch(list.head, predicate1));

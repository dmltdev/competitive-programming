/*
876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

const middleNode = function (head) {
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }

  if (count % 2 === 0) {
    let index = count / 2;
    let temp = head;
    while (index) {
      temp.next;
      temp = temp.next;
      index--;
    }
    return temp;
  } else {
    let index = Math.ceil(count / 2) - 1;
    let temp = head;
    while (index) {
      temp.next;
      temp = temp.next;
      index--;
    }
    return temp;
  }
};

//! Tests

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.next = null;
  }

  push(val) {
    let newNode = new ListNode(val);

    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  reverse() {
    let head = this.head;
    if (head === null) return;

    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      nextNode = null;
    }

    head = prevNode;
    return head;
  }

  detectLoop() {
    /*
        Floyd's cycle-finding algorithm, also known as the "tortoise and the hare" algorithm, 
        to detect loops in a linked list. 
        It uses two pointers, slowPtr and fastPtr, starting from the head of the linked list.
        The slowPtr moves one step at a time, while the fastPtr moves two steps at a time. 
        If there is a loop in the linked list, eventually, the fastPtr will catch up to the slowPtr inside the loop.
        */
    let slowPtr = this.head;
    let fastPtr = this.head;

    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      if (slowPtr === fastPtr) {
        return true;
      }
    }

    return false;
  }

  detectLoop2() {
    let set = new Set();
    while (this.head) {
      if (set.has(this.head)) {
        return true;
      }

      set.add(this.head);
      this.head = this.head.next;
    }

    return false;
  }

  detectLoop3() {
    let current = this.head;

    while (current) {
      if (current.seen) {
        return true;
      }
      current.seen = true;
      current = current.next;
    }

    return false;
  }
}

let list = new LinkedList();
for (let i = 1; i < 8; i++) {
  list.push(i);
}

console.log(list);

console.log(middleNode(list.head));

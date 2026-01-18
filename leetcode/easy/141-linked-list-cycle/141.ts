class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow ? slow.next : null;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

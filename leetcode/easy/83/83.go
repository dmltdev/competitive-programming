package main

type ListNode struct {
    Val int
    Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	curr := head

	for curr != nil {
		if curr.Next != nil && curr.Val == curr.Next.Val {
			curr.Next = curr.Next.Next
			continue
		}
		curr = curr.Next
	}

	return head;
}
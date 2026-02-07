class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

class Solution {
    fun reorderList(head: ListNode?): Unit {
        if(head?.next == null) return

        var slow = head
        var fast = head

        while (fast?.next != null) {
            slow = slow?.next
            fast = fast.next?.next
        }

        var prev: ListNode? = null
        var curr = slow

        while (curr != null) {
            val next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        var first = head
        var second = prev

        while (second?.next != null) {
            val next1 = first?.next
            val next2 = second.next

            first?.next = second
            second.next = next1

            first = next1
            second = next2
        }
    }
}

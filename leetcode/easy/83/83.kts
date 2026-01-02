/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */

class ListNode(var `val` : Int) {
    var next: ListNode? = null
}

class Solution {
    fun deleteDuplicates(head: ListNode?): ListNode? {
        var curr = head

        while (curr != null) {
            if (curr.next != null && curr.`val` == curr.next!!.`val`) {
                curr.next = curr.next!!.next
                continue
            }
            curr = curr.next
        }

        return head
    }
}
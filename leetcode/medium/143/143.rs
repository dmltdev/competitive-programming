#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl Solution {
    pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
        if head.is_none() || head.as_ref().unwrap().next.is_none() {
            return;
        }

        let mut slow_count = 0;
        let mut fast_count = 0;

        let mut temp = head.as_ref();

        while temp.is_some() && temp.unwrap().next.is_some() {
            temp = temp.unwrap().next.as_ref().unwrap().next.as_ref();
            fast_count += 1;
        }

        let mut slow = head.as_mut();
        for _ in 0..fast_count {
            slow = slow.unwrap().next.as_mut();
        }

        let mut second = slow.unwrap().next.take();
        let mut prev: Option<Box<ListNode>> = None;

        while let Some(mut node) = second {
            second = node.next.take();
            node.next = prev;
            prev = Some(node);
        }

        let mut first = head.as_mut();
        let mut second = prev;

        while let Some(mut second_node) = second {
            let first_next = first.as_mut().unwrap().next.take();
            let second_next = second_node.next.take();

            second_node.next = first_next;
            first.as_mut().unwrap().next = Some(second_node);

            first = first.unwrap().next.as_mut().unwrap().next.as_mut();
            second = second_next;
        }
    }
}

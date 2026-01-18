#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            next: None,
            val
        }
    }
}

pub fn has_cycle(head: Option<Box<ListNode>>) -> bool {
    if head.is_none() {
        return false;
    }

    let mut slow_ptr = head.as_ref().unwrap().as_ref() as *const ListNode;
    let mut fast_ptr = slow_ptr;

    unsafe {
        while !fast_ptr.is_null() {
            let fast_next = (*fast_ptr).next.as_ref();
            if fast_next.is_none() {
                return false;
            }

            let fast_next_next = fast_next.unwrap().next.as_ref();
            if fast_next_next.is_none() {
                return false;
            }

            slow_ptr = (*slow_ptr).next.as_ref().unwrap().as_ref();
            fast_ptr = fast_next_next.unwrap().as_ref();

            if slow_ptr == fast_ptr {
                return true;
            }
        }
    }

    false
}
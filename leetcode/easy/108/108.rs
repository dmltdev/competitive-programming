use std::cell::RefCell;
use std::rc::Rc;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

pub struct Solution;

impl Solution {
    pub fn sorted_array_to_bst(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        fn build(nums: &[i32], lo: i32, hi: i32) -> Option<Rc<RefCell<TreeNode>>> {
            if lo > hi {
                return None;
            }
            let mid = ((lo + hi) / 2) as usize;
            let mut node = TreeNode::new(nums[mid]);
            node.left = build(nums, lo, mid as i32 - 1);
            node.right = build(nums, mid as i32 + 1, hi);
            Some(Rc::new(RefCell::new(node)))
        }
        build(&nums, 0, nums.len() as i32 - 1)
    }
}

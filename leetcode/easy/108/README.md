# 108. Convert Sorted Array to Binary Search Tree

[LeetCode link](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

Given an integer array `nums` sorted in ascending order, build a height-balanced BST.

## Algorithm

The middle element of a sorted array is the root of a balanced BST built from it. Left half builds the left subtree, right half builds the right subtree. Recurse.

- Sorted input => inorder traversal of the resulting BST is `nums` itself, which satisfies the BST invariant for free.
- Picking the middle keeps left/right subtree sizes within 1 => height balance holds at every node by induction.

Pass inclusive index bounds `(lo, hi)` instead of slicing — no array copies.

**Complexity:** `O(n)` time, `O(log n)` recursion stack.

## Pseudo-code

```
build(nums, lo, hi):
    if lo > hi:
        return null
    mid = (lo + hi) / 2        # floor division
    node = TreeNode(nums[mid])
    node.left  = build(nums, lo, mid - 1)
    node.right = build(nums, mid + 1, hi)
    return node

sortedArrayToBST(nums):
    return build(nums, 0, len(nums) - 1)
```

## Notes

- `lo > hi` is the empty-range base case (fires past leaves).
- `lo == hi` is a single element => leaf node.
- Floor vs ceil mid both produce valid balanced trees; LeetCode accepts both.

package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func build(nums []int, lo, hi int) *TreeNode {
	if lo > hi {
		return nil
	}
	mid := (lo + hi) / 2
	return &TreeNode{
		Val:   nums[mid],
		Left:  build(nums, lo, mid-1),
		Right: build(nums, mid+1, hi),
	}
}

func sortedArrayToBST(nums []int) *TreeNode {
	return build(nums, 0, len(nums)-1)
}

package main

func removeElement(nums []int, val int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		if nums[left] == val {
			nums[left] = nums[right]
			right--
		} else {
			left++
		}
	}

	return left
}
package main

func majorityElement(nums []int) int {
	count := 1
	candidate := nums[0]

	for i := 1; i < len(nums); i++ {
		if (count == 0) {
			candidate = nums[i]
			count = 1
		} else if (nums[i] == candidate) {
			count++
		} else {
			count--
		}
	}

	return candidate
}
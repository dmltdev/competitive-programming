package main

import "fmt"

func buildArray(nums []int) []int {
	n := len(nums)

	for i := 0; i < n; i++ {
		nums[i] = nums[i] + n * (nums[nums[i]] % n)
	}

	for i := 0; i < n; i++ {
		nums[i] = nums[i] / n
	}

	return nums
}

func main() {
	fmt.Println(buildArray([]int{0, 2, 1, 5, 3, 4}))
}
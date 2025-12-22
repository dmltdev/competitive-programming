package main

func maxSubArray(nums []int) int {
    maxSum := nums[0]
	currSum := nums[0]

	for i := 1; i < len(nums); i++ {
		currSum = max(nums[i], currSum + nums[i])
		maxSum = max(currSum, maxSum)
	}

	return maxSum
}
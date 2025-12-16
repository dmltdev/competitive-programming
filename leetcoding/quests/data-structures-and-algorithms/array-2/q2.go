package main

func smallerNumbersThanCurrent(nums []int) []int {
	freq := make([]int, 101)
	for _, n := range nums {
		freq[n]++
	}

	sum := 0
	for i := 0; i < len(freq); i++ {
		count := freq[i]
		freq[i] = sum
		sum += count
	}

	result := make([]int, len(nums))
	for i, n := range nums {
		result[i] = freq[n]
	}

	return result
}
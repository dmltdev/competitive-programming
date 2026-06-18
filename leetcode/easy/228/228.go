package main

import "strconv"

func summaryRanges(nums []int) []string {
	if len(nums) == 0 {
		return []string{}
	}

	result := []string{}

	start := nums[0]
	end := nums[0]

	for i := 1; i < len(nums); i++ {
		if nums[i] == end+1 {
			end = nums[i]
		} else {
			result = append(result, formatRange(start, end))
			start = nums[i]
			end = nums[i]
		}
	}

	result = append(result, formatRange(start, end))

	return result
}

func formatRange(start int, end int) string {
	if start == end {
		return strconv.Itoa(start)
	}

	return strconv.Itoa(start) + "->" + strconv.Itoa(end)
}

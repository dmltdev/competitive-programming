package main

func twoSum(nums []int, target int) []int {
	numMap := make(map[int]int)

	for i, num := range nums {
		num2 := target - num

		if index, ok := numMap[num2]; ok {
			return []int{i, index}
		}

		numMap[num] = i
	}

	return []int{}
}
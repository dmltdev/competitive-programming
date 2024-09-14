package main

import (
	"fmt"
)

type Set map[int]struct{}

func (s Set) Exists(element int) bool {
	_, exists := s[element]
	return exists
}

func Max(x, y int) int {
	if x > y {
		return x
	}

	return y
}

func longestConsecutive(nums []int) int {
	numSet := make(Set)
	longest := 0

	for _, num := range nums {
		numSet[num] = struct{}{}
	}

	for num := range numSet {
		if !numSet.Exists(num - 1) {
			length := 1

			for numSet.Exists(num + length) {
				length += 1
			}

			longest = Max(length, longest)
		}
	}

	return longest
}

func main() {
	nums := []int{100, 4, 200, 1, 3, 2}
	fmt.Println("Longest consecutive sequence length:", longestConsecutive(nums)) // 4
}
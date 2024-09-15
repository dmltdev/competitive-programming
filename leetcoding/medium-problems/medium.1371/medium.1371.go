package main

import (
	"fmt"
)

func findTheLongestSubstring(s string) int {
	firstOccurrence := make(map[int]int)
	firstOccurrence[0] = -1 
	mask := 0    
	longest := 0 

	vowels := map[byte]int{
		'a': 1 << 0,
		'e': 1 << 1,
		'i': 1 << 2,
		'o': 1 << 3,
		'u': 1 << 4,
	}

	for i := 0; i < len(s); i++ {
		char := s[i]

		if val, ok := vowels[char]; ok {
			mask ^= val
		}

		if pos, found := firstOccurrence[mask]; found {
			longest = max(longest, i-pos)
		} else {
			firstOccurrence[mask] = i
		}
	}

	return longest
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func main() {

	fmt.Println(findTheLongestSubstring("eleetminicoworoep")) 
	fmt.Println(findTheLongestSubstring("leetcodeisgreat"))   
	fmt.Println(findTheLongestSubstring("bcbcbc"))            
}
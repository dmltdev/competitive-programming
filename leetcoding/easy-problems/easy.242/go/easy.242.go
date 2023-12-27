package main

import (
	"fmt"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	chars := make(map[rune]int)

	for _, v := range s {
		chars[v]++
	}

	for _, v := range t {
		if number, exists := chars[v]; !exists || number == 0 {
			return false
		}
		chars[v]--
	}
	
	return len(s) == len(t)
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram"))
}
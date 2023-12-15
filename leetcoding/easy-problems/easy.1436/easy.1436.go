package main

import (
	"fmt"
)

func destCity(paths [][]string) string {
	if len(paths) == 1 {
		return paths[0][1]
	}

	has_outgoing := make(map[string]bool)
	for i := range paths {
		has_outgoing[paths[i][0]] = true
	}

	for i := range paths {
		candidate := paths[i][1]
		if !has_outgoing[candidate] {
			return candidate
		}
	}

	return ""
}

func main() {
	paths := [][]string{
		{"London", "New York"},
		{"New York", "Lima"},
		{"Lima", "Sao Paulo"},
	}

	result := destCity(paths)
	fmt.Println(result)
}
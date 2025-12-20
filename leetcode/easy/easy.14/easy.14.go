package easy14

import "sort"

func longestCommonPrefix(strs []string) string {
	sort.Strings(strs)
	
	first := strs[0]
	last := strs[len(strs) - 1]

	prefix := ""

	for i := 0; i < len(first); i++ {
		if first[i] != last[i] {
			return prefix
		}

		prefix += string(first[i])
	}

	return prefix
}
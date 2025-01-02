package main

func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := m[s[len(s)-1]]

	for i := len(s) - 2; i >= 0; i-- {
		curr := m[s[i]]
		next := m[s[i+1]]

		if curr < next {
			result -= curr
		} else {
			result += curr
		}
	}

	return result
}

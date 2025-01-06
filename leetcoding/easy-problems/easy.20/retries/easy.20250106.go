package easy20

func isValid(s string) bool {
	stack := []rune{}

	brackets := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}

	for _, r := range s {
		if _, ok := brackets[r]; ok {
			stack = append(stack, r)
		} else if len(stack) == 0 || brackets[stack[len(stack)-1]] != r {
			return false
		} else {
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

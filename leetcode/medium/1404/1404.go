package main

func numSteps(s string) int {
	n := len(s)
	steps := 0
	carry := 0

	for i := n - 1; i >= 1; i-- {
		current := int(s[i]-'0') + carry

		if current == 0 {
			steps += 1
			carry = 0
		} else if current == 1 {
			steps += 2
			carry = 1
		} else {
			steps += 1
			carry = 1
		}
	}

	if carry == 1 {
		steps += 1
	}

	return steps
}

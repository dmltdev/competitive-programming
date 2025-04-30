package main

import "fmt"

func isValid(s string) bool {
	stack := []string{}
	brackets := map[string]string{
		"(": ")",
		"{": "}",
		"[": "]",
	}

	for _, char := range s {
		if _, exists := brackets[string(char)]; exists {
			stack = append(stack, string(char))
		} else {
			if len(stack) == 0 {
				return false
			}
			top := stack[len(stack)-1]
			if brackets[top] != string(char) {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

func main() {
	fmt.Println(isValid("()"))
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid("(]"))
	fmt.Println(isValid("([)]"))
	fmt.Println(isValid("{[]}"))
}
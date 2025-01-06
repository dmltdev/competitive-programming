# 20. Valid Parentheses

[LeetCode](https://leetcode.com/problems/valid-parentheses/)

## Problem Statement

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:

```
Input: s = "()"
Output: true
```

Example 2:

```
Input: s = "()[]{}"
Output: true
```

Example 3:

```
Input: s = "(]"
Output: false
```

Example 4:

```
Input: s = "([])"
Output: true
```

## Constraints

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

## Solution

- Use a stack to keep track of the open brackets.
- Define a map to store the matching pairs of brackets.
- Iterate through the string, and for each character:
  - If it's an open bracket, push it onto the stack.
  - If it's a close bracket, check if the stack is empty or the top of the stack doesn't match the corresponding open bracket.
  - If it's a close bracket and the stack is empty or the top of the stack doesn't match the corresponding open bracket, return false.
  - Otherwise, pop the top of the stack.
- After iterating through the string, check if the stack is empty. If it is, return true, otherwise return false.

```ts
function isValid(s: string): boolean {
  const stack: string[] = [];

  const brackets: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (top === undefined || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

```go
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
```

## Complexity

- Time complexity: O(n) | Iterate through the string once.
- Space complexity: O(n) | Use a stack to store the open brackets.
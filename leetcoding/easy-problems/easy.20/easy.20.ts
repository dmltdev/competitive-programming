/*
Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s: string): boolean {
  const stack: string[] = [];
  let brackets: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
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

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('({[()]})')); // true

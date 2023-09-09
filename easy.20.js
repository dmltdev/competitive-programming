/*
Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

let isValid = function (s) {
  let stack = [];
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (brackets[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
isValid("({[()]})");

/* 
258. Add Digits
Easy
Topics
premium lock icon
Companies
Hint
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

export function addDigits2(num: number): number {
  const digits = num.toString().split("");
  if (digits.length === 1) return Number(digits[0]);

  const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
  return addDigits(sum);
}

// The digital root: if num is 0, return 0; else, return `1 + (num - 1) % 9`
export function addDigits(num: number): number {
  return num === 0 ? 0 : 1 + ((num - 1) % 9);
}

const a = addDigits(38);
const b = addDigits(101);
const c = addDigits(0);
console.log(a);
console.log(b);
console.log(c);

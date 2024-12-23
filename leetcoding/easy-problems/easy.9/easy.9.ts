/* 
9. Palindrome Number
Solved
Easy
Topics
Companies
Hint

Given an integer x, return true if x is a
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?
*/

// Method 1: Convert to string and compare
export function isPalindrome(x: number): boolean {
  const reversed = x.toString().split("").reverse().join("");

  return x === parseInt(reversed, 10);
}

// Method 2: Compare without converting to string
export function isPalindrome2(x: number): boolean {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (original > 0) {
    const lastDigit = original % 10;
    reversed = reversed * 10 + lastDigit;
    original = Math.floor(original / 10);
  }

  return x === reversed;
}

# 9. Palindrome Number

[9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)

## Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## Algorithm

### Method 1: Convert to string and compare

**To check if a number is a palindrome, we can convert the number to a string and compare it to its reverse.**

- Convert the number to a string.
- Compare the string to its reverse.
- Return `true` if they are the same, `false` otherwise.

```ts
function isPalindrome(x: number): boolean {
  const reversed = x.toString().split("").reverse().join("");

  return x === parseInt(reversed, 10);
}
```

### Method 2: Compare without converting to string

**To check if a number is a palindrome without converting to a string, we can reverse the number by extracting its digits and reconstructing it.**

- Check if the number is negative, as negative numbers cannot be palindromes.
- Initialize two variables: `original` to store the original number and `reversed` to store the reversed number.
- Use a loop to extract the last digit of the original number and add it to the reversed number.
- Remove the last digit from the original number.
- Continue the loop until the original number is reduced to 0.
- Compare the reversed number to the original number.
- Return `true` if they are the same, `false` otherwise.

```ts
function isPalindrome2(x: number): boolean {
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
```

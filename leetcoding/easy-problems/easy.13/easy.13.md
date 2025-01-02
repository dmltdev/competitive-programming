# Roman to Integer

[LeetCode](https://leetcode.com/problems/roman-to-integer/)

## Problem Statement

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

## Algoriths

### Method 1: Basic Iteration

- Define a map of Roman numerals to their corresponding integer values.
- Initiailize a variable to store the result.
- Iterate through the string of Roman numerals.
- For each Roman numeral, check if the current numeral is less than the next numeral.
- If it is, subtract the current numeral from the result.
- Otherwise, add the current numeral to the result.
- Return the result.

```ts
const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let value = 0;

  for (let i = 0; i < s.length; i++) {
    const [roman, int] = [s[i], symbols[s[i]]];
    const [nextRoman, nextInt] = [s[i + 1], symbols[s[i + 1]]];

    if (int < nextInt) {
      value -= int;
    } else {
      value += int;
    }
  }

  return value;
}
```

Time Complexity: O(n) | We iterate through the string once.
Space Complexity: O(1) | We use a constant amount of space.

### Method 2: Better Iteration

- Define a map of Roman numerals to their corresponding integer values.
- Initialize the result with the value of the last character.
- Iterate through the string from right to left, starting from the second-to-last character.
- If the current value is less than the previous value, subtract it.
- Otherwise, add it to the result.
- This approach eliminates the need to look ahead in the string.

```ts
function romanToInt(s: string): number {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = symbols[s[s.length - 1]];
    
    for (let i = s.length - 2; i >= 0; i--) {
        if (symbols[s[i]] < symbols[s[i + 1]]) {
            result -= symbols[s[i]];
        } else {
            result += symbols[s[i]];
        }
    }
    
    return result;
}
```

Time Complexity: O(n) | We iterate through the string once.
Space Complexity: O(1) | We use a constant amount of space.

### Method comparison

- Method 1: Simple and straightforward, but requires looking ahead in the string.
- Method 2: More efficient due to less iterations, avoids looking ahead, and handles subtraction cases directly.
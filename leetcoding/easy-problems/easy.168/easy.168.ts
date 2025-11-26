/* 
168. Excel Sheet Column Title
Easy
Topics
premium lock icon
Companies
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
 

Constraints:

1 <= columnNumber <= 231 - 1
*/

function convertToTitle(columnNumber: number): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let num = columnNumber;

  while (num > 0) {
    const charIndex = (num - 1) % 26;
    result = alphabet[charIndex] + result;
    num = Math.floor((num - 1) / 26);
  }

  return result;
}

const a = convertToTitle(28);
console.log(a);

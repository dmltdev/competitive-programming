/* 
709. To Lower Case

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"
 

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.
*/

function toLowerCase(s: string): string {
    let diff = 0;
    let newStr = '';

    for (let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
        diff = s.charCodeAt(i) - 65;
        let newChar = String.fromCharCode(97 + diff);
        newStr += newChar;
      } else {
        newStr += s[i];
      }
    }

    return newStr;
};
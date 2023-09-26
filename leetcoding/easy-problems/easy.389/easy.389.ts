/* 
389. Find the Difference

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

 

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
 

Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lowercase English letters.
*/

function findTheDifference(s: string, t: string): string {
  let sum = t.charCodeAt(s.length);

  for (let i = 0; i < s.length; i++) {
    sum += t.charCodeAt(i) - s.charCodeAt(i);
  }

  return String.fromCharCode(sum);
}

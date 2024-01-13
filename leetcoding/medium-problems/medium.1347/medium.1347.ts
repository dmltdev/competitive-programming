/* 
1347. Minimum Number of Steps to Make Two Strings Anagram

You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 
 

Constraints:

1 <= s.length <= 5 * 104
s.length == t.length
s and t consist of lowercase English letters only.
*/

function minSteps(s: string, t: string): number {
  let steps: number = 0;
  const count: number[] = new Array(26).fill(0);

  const firstLetter: number = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[t.charCodeAt(i) - firstLetter]++;
    count[s.charCodeAt(i) - firstLetter]--;
  }

  for (let i = 0; i < count.length; i++) {
    steps += Math.max(0, count[i]);
  }

  return steps;
}

minSteps('practice', 'leetcode'); //?

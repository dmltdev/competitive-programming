/* 
567. Permutation in String

Medium
Topics
Companies
Hint

Given two strings s1 and s2, return true if s2 contains a
permutation
of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

 

Constraints:

    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.


*/

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Freq = new Array(26).fill(0);
  const s2Freq = new Array(26).fill(0);

  const aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1.charCodeAt(i) - aCharCode]++;
    s2Freq[s2.charCodeAt(i) - aCharCode]++;
  }

  if (arraysAreEqual(s1Freq, s2Freq)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    s2Freq[s2.charCodeAt(i) - aCharCode]++;
    s2Freq[s2.charCodeAt(i - s1.length) - aCharCode]--;

    if (arraysAreEqual(s1Freq, s2Freq)) return true;
  }

  return false;
}

function arraysAreEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

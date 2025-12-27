/* 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const counts: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
    counts[t.charCodeAt(i) - 97]--;
  }

  for (const c of counts) {
    if (c !== 0) return false;
  }
  return true;
}

isAnagram("anagram", "nagaram"); //?

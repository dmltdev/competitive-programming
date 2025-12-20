/* 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = map.get(s[i]);
    map.set(s[i], (char ?? 0) + 1);
  }

  for (let i = 0; i <= t.length; i++) {
    const value = map.get(t[i]);

    if (value === undefined) return false;
    if (value === 0) map.delete(t[i]);
    if (value > 0) map.set(t[i], value - 1);
  }

  return ![...map.values()].some(Boolean);
}

isAnagram('anagram', 'nagaram'); //?

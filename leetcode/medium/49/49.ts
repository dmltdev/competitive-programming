/* 
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// Groups map; key is sorted string, value is array of anagrams
// Time: O(n * k log k), where n is number of strings and k is max length of string
// Space: O(n * k) => storing all strings in the output + hash map overhead (O(n) keys, each of length k => O(n * k) space)
function groupAnagrams_v1(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(str);
  }

  return Array.from(groups.values());
}

// Character frequency key
// Avoids sorting (useful for very long strings)
// Time: O(n * k), where n is number of strings and k is max length of string
// Space: O(n * k) => storing all strings in the output + hash map overhead (O(n) keys, each of length k => O(n * k) space)
function groupAnagrams_v2(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const counts = new Array(26).fill(0);
    for (const char of str) {
      counts[char.charCodeAt(0) - 97]++;
    }

    const key = counts.join(",");
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(str);
  }

  return Array.from(groups.values());
}

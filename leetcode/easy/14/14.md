# 14. Longest Common Prefix

[Problem](https://leetcode.com/problems/longest-common-prefix/)

## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


## Constraints

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.

### Algorithm

- If the array is empty, return an empty string.
- Sort the array of strings.
- Get the first and last strings in the sorted array.
- Iterate over the characters of the first string.
- If the character at the current index is not the same as the character at the current index in the last string, return the prefix.
- Otherwise, add the character to the prefix.
- Return the prefix.

### Implementation

```ts
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  const sortedStrs = strs.sort((a, b) => a.localeCompare(b));
  const [first, last] = [sortedStrs[0], sortedStrs[sortedStrs.length - 1]];

  let prefix = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      return prefix;
    }

    prefix += first[i];
  }

  return prefix;
}
```

Time Complexity: O(n log n) (Sorting + Iterating)
Space Complexity: O(1) (No extra space used)
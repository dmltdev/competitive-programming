# 28. Find the Index of the First Occurrence in a String

28. Find the Index of the First Occurrence in a String
Problem Statement

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Consider the following:

    If needle is found in haystack, return the index of the first occurrence of needle.
    If needle is not found in haystack, return -1.

Constraints

    1 <= haystack.length, needle.length <= 10^4
    haystack and needle consist of only lowercase English characters.

Examples

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
Solution

    Initialize a variable index to -1, which will store the index of the first occurrence of needle in haystack.
    Iterate through the haystack string, checking for the presence of needle.
    If needle is found, update index with the current index and break out of the loop.
    Return the value of index.

```typescript
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  const needleLength = needle.length;
  const haystackLength = haystack.length;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let match = true;

    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }

  return -1;
}
```

Alternatively, you can use the built-in indexOf method provided by the JavaScript string object.

```typescript
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
```

Time Complexity: O(n * m) | Iterate through the haystack string, checking for the presence of needle.
Space Complexity: O(1) | No extra space is used.

Note: The above solution uses a simple string matching algorithm. For larger strings, you may want to consider using more efficient string matching algorithms such as the Knuth-Morris-Pratt algorithm or the Rabin-Karp algorithm.
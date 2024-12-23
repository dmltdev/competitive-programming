# 1768. Merge Strings Alternately

[1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

## Problem Statement

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

## Algorithm

**To merge the given strings, we use one pointer to iterate through the strings and append the characters to the result string.**

- Initialize an empty string `res` to store the merged result.
- Determine the maximum length between `word1` and `word2`.
- Iterate through the indices from 0 to the maximum length.
- For each index, append the character from `word1` and `word2` to `res`.
- Return the merged string `res`.

## Code

```ts
function mergeAlternately(word1: string, word2: string): string {
  let res = "";

  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    res += word1.slice(i, i + 1);
    res += word2.slice(i, i + 1);
  }

  return res;
}
```
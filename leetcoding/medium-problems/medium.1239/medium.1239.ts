/* 
1239. Maximum Length of a Concatenated String with Unique Characters

You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
Explanation: The only string in arr has all 26 characters.
*/

//* DFS
// function maxLength(arr: string[]): number {
//   let result: number[] = [0];
//   dfs(arr, '', 0, result);
//   return result[0];
// }

// function dfs(arr: string[], path: string, i: number, result: number[]) {
//   if (isUniqueChars(path)) {
//     result[0] = Math.max(result[0], path.length);
// }

//   if (i === arr.length || !isUniqueChars(path)) {
//     return;
//   }

//   for (let j = i; j < arr.length; j++) {
//     dfs(arr, path + arr[j], j + 1, result);
//   }
// }

// function isUniqueChars(chars: string) {
//   const unique = new Set<string>();

//   for (const char of chars) {
//     if (unique.has(char)) return false;
//     unique.add(char);
//   }

//   return true;
// }

function maxLength(arr: string[]): number {
  const chars = new Set<string>();

  function overlap(charSet: Set<string>, str: string): boolean {
    const prev = new Set<string>();
    for (const char of str) {
      if (charSet.has(char) || prev.has(char)) return true;
      prev.add(char);
    }
    return false;
  }

  function backtrack(i: number): number {
    if (i === arr.length) return chars.size;
    let res = 0;
    if (!overlap(chars, arr[i])) {
      for (const char of arr[i]) {
        chars.add(char);
      }
      res = backtrack(i + 1);
      for (const char of arr[i]) {
        chars.delete(char);
      }
    }
    return Math.max(res, backtrack(i + 1));
  }
  return backtrack(0);
}

maxLength(['cha', 'r', 'act', 'ers']); //?

/* 
131. Palindrome Partitioning

Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/

function partition(s: string): string[][] {
  const result: string[][] = [];

  function isPalindrome(sub: string): boolean {
    let left = 0;
    let right = sub.length - 1;
  
    while (left < right) {
      if (sub[left] !== sub[right]) return false;
      left++;
      right--;
    }
  
    return true;
  }

  function backtrack(start: number, path: string[]): void {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.substring(start, end);
      if (isPalindrome(substring)) {
        path.push(substring);
        backtrack(end, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}

partition('aab'); //?
partition('a'); //?

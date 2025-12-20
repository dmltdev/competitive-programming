export const vowels = new Map([
  ["a", 1 << 0],
  ["e", 1 << 1],
  ["i", 1 << 2],
  ["o", 1 << 3],
  ["u", 1 << 4],
]);

/**
 * Finds the length of the longest substring where each vowel ('a', 'e', 'i', 'o', 'u')
 * appears an even number of times.
 *
 * - Uses a bitmask to track the parity (odd/even count) of each vowel.
 * - When the same bitmask occurs at two different indices, it means the substring between
 *   those indices has even counts for each vowel.
 * - The first occurrence of each bitmask is stored in a map for quick lookup.
 *
 * Time Complexity: O(n) where n is the length of the input string.
 * Space Complexity: O(1) since there are only 32 possible bitmask values.
 *
 * @param {string} s - Input string containing only lowercase English letters.
 * @return {number} - Length of the longest substring with even counts of vowels.
 */
function findTheLongestSubstring(s: string): number {
  const firstOccurrence = new Map<number, number>();
  firstOccurrence.set(0, -1);

  let mask = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (vowels.has(char)) {
      mask ^= vowels.get(char)!;
    }

    if (firstOccurrence.has(mask)) {
      longest = Math.max(longest, i - firstOccurrence.get(mask)!);
    } else {
      firstOccurrence.set(mask, i);
    }
  }

  return longest;
}

console.log(findTheLongestSubstring("eleetminicoworoep"));
console.log(findTheLongestSubstring("leetcodeisgreat"));
console.log(findTheLongestSubstring("bcbcbc"));

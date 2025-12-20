class Solution:
  @classmethod
  def findTheLongestSubstring(self, s: str) -> int:
    vowels = {'a': 1 << 0, 'e': 1 << 1, 'i': 1 << 2, 'o': 1 << 3, 'u': 1 << 4}
    first_occurrence = {0: -1}
    mask = 0
    longest = 0

    for i, char in enumerate(s):
        if char in vowels:
            mask ^= vowels[char]
        if mask in first_occurrence:
            longest = max(longest, i - first_occurrence[mask])
        else:
            first_occurrence[mask] = i

    return longest

print(Solution.findTheLongestSubstring("eleetminicoworoep"))  
print(Solution.findTheLongestSubstring("leetcodeisgreat"))
print(Solution.findTheLongestSubstring("bcbcbc"))
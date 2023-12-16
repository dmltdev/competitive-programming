from collections import defaultdict

class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    map = defaultdict(int)
    
    for item in s:
      map[item] += 1
      
    for item in t:
      map[item] -= 1
      
    for val in map.values():
      if val != 0:
        return False
      
    return True
  
#! Sample test
solution = Solution()
print(solution.isAnagram("anagram", "nagaram"))
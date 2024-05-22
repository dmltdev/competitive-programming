from typing import List

class Solution:
    def partition(self, s: str) -> List[List[str]]:
      result = []
      
      def isPalindrome(sub: str) -> bool:
        left = 0
        right = len(sub) - 1
        
        while left < right:
          if sub[left] != sub[right]:
            return False
          left += 1
          right -= 1
        return True
      
      def backtrack(start: int, path: List[str]) -> None:
        if start == len(s):
          result.append(path[:])
          return
        
        for end in range(start + 1, len(s) + 1):
          substring = s[start:end]
          if isPalindrome(substring):
            path.append(substring)
            backtrack(end, path)
            path.pop()
            
      backtrack(0, [])
      return result
    
solution = Solution()

print(solution.partition('aab'))
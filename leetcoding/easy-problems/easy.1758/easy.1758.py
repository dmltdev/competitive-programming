class Solution:
  def minOperations(self, s: str) -> int:
    startZero = 0
    
    for i in range(len(s)):
      if i % 2 == 0:
        if s[i] == '1':
          startZero += 1
      else:
          if s[i] == '0':
            startZero += 1
            
    return min(startZero, len(s) - startZero)
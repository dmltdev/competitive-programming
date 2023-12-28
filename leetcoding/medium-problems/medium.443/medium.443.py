from typing import List

class Solution:
  def compress(self, chars: List[str]) -> int:
    result = 0
    i = 0
    
    while i < len(chars):
      char = chars[i]
      count = 0
      while i < len(chars) and chars[i] == char:
        count += 1
        i += 1
      chars[result] = char
      result += 1
      if count > 1:
        for c in str(count):
          chars[result] = c
          result += 1
          
    return result
import math
from typing import List
from collections import Counter

class Solution:
    def minOperations(self, nums: List[int]) -> int:
        count = Counter(nums)
        res: int = 0
        
        for n, c in count.items():
          if c == 1:
            return -1
          res += math.ceil(c / 3)
          
        return res
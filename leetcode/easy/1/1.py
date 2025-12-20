from typing import List

class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    dict = {}
    
    for i in range(len(nums)):
      num1 = nums[i]
      num2 = target - num1
      
      if num2 in dict:
        return [dict[num2], i]
      
      dict[nums[i]] = i
    
    return []
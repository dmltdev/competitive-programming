from typing import List

#! Brute Force Solution | Time O(n^2), Space O(1)
# class Solution:
#     def destCity(self, paths: List[List[str]]) -> str:
#         if len(paths) == 1:
#           return paths[0][1]
        
#         for i in range(len(paths)):
#           candidate = paths[i][1]
#           good = True
          
#           for j in range(len(paths)):
#             if paths[j][0] == candidate:
#               good = False
#               break
            
#           if good:
#             return candidate
          
#         return ""

#! Hash Map Solution | Time O(n), Space O(n)
class Solution:
  def destCity(self, paths: List[List[str]]) -> str:
    if len(paths) == 1:
      return paths[0][1]
    
    has_outgoing = set()
    for i in range(len(paths)):
      has_outgoing.add(paths[i][0])
      
    for i in range(len(paths)):
      candidate = paths[i][1]
      if candidate not in has_outgoing:
        return candidate
      
    return ""
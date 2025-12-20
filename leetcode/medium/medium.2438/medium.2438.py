from typing import List

class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
      m: int = len(grid)
      n: int = len(grid[0])
      onesRow: List[int] = [0] * m
      onesCol: List[int] = [0] * n
      
      for i in range(m):
        for j in range(n):
          onesRow[i] += grid[i][j]
          onesCol[j] += grid[i][j]
          
      diff: List[List[int]] = [[0] * n for _ in range(m)]
      
      for i in range(m):
        for j in range(n):
          zerosRowCount: int = n - onesRow[i]
          zerosColCount: int = m - onesCol[j]
          diff[i][j] = onesRow[i] + onesCol[j] - zerosRowCount - zerosColCount
          
      return diff
      
"""test"""
solution = Solution();
result = solution.onesMinusZeros([[0,1,1],[1,0,1],[0,0,1]])
print(result)
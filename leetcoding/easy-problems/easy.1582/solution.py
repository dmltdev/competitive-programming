from typing import List

def numSpecial(mat: List[List[int]]) -> int:
   row = [0] * len(mat)
   col= [0] * len(mat[0])
   for i in range(len(mat)):
     for j in range(len(mat[0])):
        if mat[i][j] == 1:
           row[i] += 1
           col[j] += 1
   count = 0
   for i in range(len(mat)):
      for j in range(len(mat[0])):
         if mat[i][j] == 1 and row[i] == 1 and col[j] == 1:
            count += 1
   return count
from typing import List

class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort() # children's greed ASC
        s.sort() # cookie's size ASC
        
        cookie_index: int  = 0
        content_children: int = 0
        
        while cookie_index < len(s) and content_children < len(g):
          if s[cookie_index] >= g[content_children]:
            content_children += 1
          cookie_index += 1
          
        return content_children
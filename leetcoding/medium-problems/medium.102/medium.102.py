'''
102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
'''

from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:

    @classmethod
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
      result: List[List[int]] = []
      
      def helper(root: Optional[TreeNode]):
        if root is None:
          return
        
        queue: List[TreeNode] = [root]
        
        while queue:
          level: List[int] = []
          for _ in range(len(queue)):
            node: TreeNode = queue.pop(0)
            level.append(node.val)
            if node.left is not None:
              queue.append(node.left)
            if node.right is not None:
              queue.append(node.right)
          result.append(level)
      
      helper(root)
      
      return result
  
root1 = TreeNode(1)
root1.left = TreeNode(9)
root1.right = TreeNode(20)
root1.right.left = TreeNode(15)
root1.right.right = TreeNode(7)
root2 = TreeNode(1)
root3 = None
print(Solution.levelOrder(root1))
print(Solution.levelOrder(root2))
print(Solution.levelOrder(root3))
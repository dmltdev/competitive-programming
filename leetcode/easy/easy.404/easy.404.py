'''
404. Sum of Left Leaves

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000
'''
from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def helper(self, node: Optional[TreeNode], sum: List) -> None: 
      if not node:
        return
      
      if node.left and (not node.left.left and not node.left.right):
        sum[0] += node.left.val
        
      self.helper(node.left, sum)
      self.helper(node.right, sum)
    
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        sum = [0]
        
        self.helper(root, sum)
        
        return sum[0]
        
root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
solution = Solution()
print(solution.sumOfLeftLeaves(root))
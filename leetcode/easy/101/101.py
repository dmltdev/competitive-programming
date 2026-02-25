from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        return self._is_mirror(root.left, root.right)

    def _is_mirror(self, left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
        if not left and not right:
            return True

        if not left or not right:
            return False

        values_match = left.val == right.val
        outer_mirrors = self._is_mirror(left.left, right.right)
        inner_mirrors = self._is_mirror(left.right, right.left)

        return values_match and outer_mirrors and inner_mirrors

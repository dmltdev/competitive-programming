/* 
110. Balanced Binary Tree
Easy
Topics
Companies

Given a binary tree, determine if it is
height-balanced
.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

 

Constraints:

    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104


*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  let imbalance = false;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    if (!imbalance) {
      const left = dfs(node.left);
      const right = dfs(node.right);

      const isImbalanced = Math.abs(left - right) > 1;
      if (isImbalanced) imbalance = true;

      return 1 + Math.max(left, right);
    }

    return 0;
  }

  dfs(root);

  return !imbalance;
}

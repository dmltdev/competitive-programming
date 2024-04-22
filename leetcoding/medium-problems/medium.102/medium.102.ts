/* 
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];

  function bfs(root: TreeNode | null) {
    if (!root) return;

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
      const level: number[] = [];
      const levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        const node: TreeNode = queue.shift() as TreeNode;
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      result.push(level);
    }
  }

  bfs(root);

  return result;
}

const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

const root2 = new TreeNode(1);

const root3 = null;

levelOrder(root1) //?
levelOrder(root2) //?
levelOrder(root3) //?
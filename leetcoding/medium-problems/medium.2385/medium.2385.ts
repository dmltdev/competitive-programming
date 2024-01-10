/* 
2385. Amount of Time for Binary Tree to Be Infected

You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.
Return the number of minutes needed for the entire tree to be infected.

 

Example 1:


Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.
Example 2:


Input: root = [1], start = 1
Output: 0
Explanation: At minute 0, the only node in the tree is infected so we return 0.
 

Constraints:

The number of nodes in the tree is in the range [1, 105].
1 <= Node.val <= 105
Each node has a unique value.
A node with a value of start exists in the tree.
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

function amountOfTime(root: TreeNode | null, start: number): number {
  let minutes = 0;

  function dfs(node: TreeNode | null, start) {
    if (!node) return 0;

    const left = dfs(node.left, start)!;
    const right = dfs(node.right, start)!;

    if (node.val === start) {
      minutes = Math.max(left, right);
      return -1;
    } else if (left >= 0 && right >= 0) {
      return Math.max(left, right) + 1;
    }

    minutes = Math.max(minutes, Math.abs(left - right));
    return Math.min(left, right) - 1;
  }

  dfs(root, start);
  return minutes;
}

const Tree = new TreeNode(1);
Tree.left = new TreeNode(5);
Tree.left.right = new TreeNode(4);
Tree.left.right.left = new TreeNode(9);
Tree.left.right.right = new TreeNode(2);

Tree.right = new TreeNode(3);
Tree.right.left = new TreeNode(10);
Tree.right.right = new TreeNode(6);

amountOfTime(Tree, 3); //?

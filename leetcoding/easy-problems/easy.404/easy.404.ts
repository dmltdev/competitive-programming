/* 
404. Sum of Left Leaves

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
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

function helper(root: TreeNode | null, sum: { val: number }) {
  if (root === null) return;

  if (root.left && root.left.left === null && root.left.right === null) {
    sum.val += root.left.val; //?
  }

  helper(root.left, sum);
  helper(root.right, sum);
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = { val: 0 };

  helper(root, sum);

  return sum.val;
}

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
console.log(tree);

sumOfLeftLeaves(tree); //?

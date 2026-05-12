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

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  function build(lo: number, hi: number): TreeNode | null {
    if (lo > hi) return null;
    const mid = (lo + hi) >> 1;
    const node = new TreeNode(nums[mid]);
    node.left = build(lo, mid - 1);
    node.right = build(mid + 1, hi);
    return node;
  }

  return build(0, nums.length - 1);
}

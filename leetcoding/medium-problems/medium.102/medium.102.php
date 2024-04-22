<?php

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
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = 0, $left = null, $right = null) {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}
class Solution {

  /**
   * @param TreeNode $root
   * @return Integer[][]
   */
  function levelOrder($root) {
      $result = [];

      if ($root == null) {
        return [];
      }
      $queue = [$root];
      while (!empty($queue)) {
        $level = [];
        $levelCount = count($queue);
        for ($i = 0; $i < $levelCount; $i++) {
          $node = array_shift($queue);
          $level[] = $node->val;
          if ($node->left) {
            $queue[] = $node->left;
          }
          if ($node->right) {
            $queue[] = $node->right;
          }
        }
        array_push($result, $level);
      }

      return $result;
  }
}

$root1 = new TreeNode(1);
$root1->left = new TreeNode(9);
$root1->right = new TreeNode(20);
$root1->right->left = new TreeNode(15);
$root1->right->right = new TreeNode(7);
$root2 = new TreeNode(1);
$root3 = null;

$solution = new Solution();
echo var_dump($solution->levelOrder($root1));
echo var_dump($solution->levelOrder($root2));
echo var_dump($solution->levelOrder($root3));
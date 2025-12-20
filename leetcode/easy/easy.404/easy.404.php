<?php

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

class Sum {
  public $val;

  public function __construct($val = 0) {
    $this->val = $val;
  }
}

class Solution {

  /**
   * @param TreeNode $root 
   * @param Sum $sum $sum
   */
  function helper($root, $sum) {
    if (!$root) return;

    if ($root->left && (!$root->left->left && !$root->left->right)) {
      $sum->val += $root->left->val;
    }

    $this->helper($root->left, $sum);
    $this->helper($root->right, $sum);
  }
    /**
     * @param TreeNode $root
     * @return int
     */
    function sumOfLeftLeaves($root) {
        $sum = new Sum();

        $this->helper($root, $sum);
        
        return $sum->val;
    }
}

const solution = new Solution();

$root = new TreeNode(3);
$root->left = new TreeNode(9);
$root->right = new TreeNode(20);
$root->right->left = new TreeNode(15);
$root->right->right = new TreeNode(7);

$result = solution->sumOfLeftLeaves($root);
echo $result;
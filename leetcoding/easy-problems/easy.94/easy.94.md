# 94. Binary Tree Inorder Traversal

[LeetCode Link](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Problem Statement

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Hint: inorder traversal is a depth-first traversal that visits nodes in the following order: left, root, right.

## Constraints

- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

### Recursive Solution

- Time Complexity: O(n) | Visit each node exactly once
- Space Complexity: O(h) | Recursive call stack can grow up to the height of the tree, where h is the tree height

Algorithm:

- Create a result array to store the traversal values
- Define a recursive helper function that:
  - Returns if the current node is null (base case)
  - Recursively traverses the left subtree
  - Adds the current node's value to the result
  - Recursively traverses the right subtree
- Call the helper function with the root node
- Return the result array

### Iterative Solution

- Time Complexity: O(n) | Visit each node exactly once
- Space Complexity: O(h) | Stack can grow up to the height of the tree, where h is the tree height

Algorithm:

- Initialize an empty result array and a stack for tracking nodes
- Start at the root node
- While we have nodes to process (current node exists OR stack is not empty):
  - Push all left nodes onto the stack until we reach null
  - Pop a node from the stack (this is our current node)
  - Add its value to our result
  - Move to its right child and repeat the process
- Return the result array
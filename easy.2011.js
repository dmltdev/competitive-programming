/*
2011. Final Value of Variable After Performing Operations
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

let finalValueAfterOperations = function (operations) {
  let x = 0;
  operations.forEach((operation) => {
    operation === "--X" ? --x : x;
    operation === "X--" ? x-- : x;
    operation === "++X" ? ++x : x;
    operation === "X++" ? x++ : x;
  });
  return x;
};

let ops = ["X++", "++X", "--X", "X--"];
console.log(finalValueAfterOperations(ops));

let ops2 = ["++X", "++X", "X++"];
console.log(finalValueAfterOperations(ops2));

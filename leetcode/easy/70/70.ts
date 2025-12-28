/* 
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/

// Solution 1: Recursion
function climbStairs_recursion(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  return climbStairs_recursion(n - 1) + climbStairs_recursion(n - 2);
}

// Solution 2: Memoization
function climbStairs_memoization(n: number): number {
  const memo: Record<number, number> = {};

  function helper(n: number, memo: Record<number, number>): number {
    if (n === 0 || n === 1) return 1;
    if (!memo[n]) {
      memo[n] = helper(n - 1, memo) + helper(n - 2, memo);
    }
    return memo[n];
  }

  return helper(n, memo);
}

// Solution 3: Tabulation
function climbStairs_tabulation(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }

  const dp = Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Solution 4: Space Optimization
function climbStairs(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }

  let prev = 1;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
}

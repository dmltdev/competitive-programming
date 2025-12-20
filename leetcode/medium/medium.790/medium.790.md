# 790. Domino and Tromino Tiling

[790. Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)

## Problem Statement

You have two types of tiles:

- A domino: a 2 x 1 tile (can be placed vertically or horizontally)
- A tromino: an L-shaped tile (can be rotated)

Given an integer `n`, return the number of ways to tile a 2 x n board. Since the answer may be very large, return it modulo 10^9 + 7.

**Constraints:**

- 1 <= n <= 1000

## Algorithm

We use dynamic programming to solve this problem. Let `dp[i]` be the number of ways to tile a 2 x i board.

### Base Cases

- `dp[0] = 1` (empty board)
- `dp[1] = 1` (one vertical domino)
- `dp[2] = 2` (two vertical dominoes or two horizontal dominoes)

### Recurrence Relation

For `i >= 3`:

```
dp[i] = (2 * dp[i-1] + dp[i-3]) % MOD
```

#### Explanation

- **Place a vertical domino at the end:** This leaves a 2 x (i-1) board (`dp[i-1]` ways).
- **Place two horizontal dominoes at the end:** This leaves a 2 x (i-2) board (`dp[i-2]` ways).
- **Place a tromino at the end:** There are two orientations for the tromino, and for each, it covers the last three columns, leaving a 2 x (i-3) board. This gives `2 * dp[i-3]` ways, but the recurrence simplifies to `2 * dp[i-1] + dp[i-3]` due to overlap in cases.

### Code

```ts
function numTilings(n: number): number {
  const MOD = 1000000007;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % MOD;
  }

  return dp[n];
}
```

## Example

**Input:** `n = 3`

**Output:** `5`

**Explanation:**
There are 5 ways to tile a 2 x 3 board:

1. Three vertical dominoes
2. One horizontal domino on the left, two vertical dominoes on the right
3. Two vertical dominoes on the left, one horizontal domino on the right
4. Two trominoes (L-shape) in different orientations

## Complexity

- **Time Complexity:** O(n)

  - We compute each dp[i] from 3 to n in a single loop, so the total number of operations is linear in n.

- **Space Complexity:** O(n)
  - We use an array of size n+1 to store the number of ways for each board size up to n.

## Summary

- Use dynamic programming to build up the solution.
- The recurrence efficiently counts all valid tilings using dominoes and trominoes.
- The answer is computed modulo 10^9 + 7.

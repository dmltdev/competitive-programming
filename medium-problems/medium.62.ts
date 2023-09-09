/*
62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

*/

//! Initial solution using recursion (not performant with large numbers)
// const uniquePaths = function (m: number, n: number): number | undefined {
//   if (m === 1 || n === 1) {
//     return 1;
//   }
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
// };

const uniquePaths = function (m: number, n: number): number | undefined {
  if ([m, n].includes(1)) return 1;

  let currentRow = Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      currentRow[col] += currentRow[col - 1];
    }
  }

  return currentRow[n - 1];
};

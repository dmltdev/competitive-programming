/* 
463. Island Perimeter

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example 1:


Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
Example 2:

Input: grid = [[1]]
Output: 4
Example 3:

Input: grid = [[1,0]]
Output: 4
 

Constraints:

row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] is 0 or 1.
There is exactly one island in grid.
*/

function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  const rows = grid.length;
  const columns = grid[0].length;
  const land = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (grid[row][col] === land) {
        let neighborLand = 4;

        if (row > 0 && grid[row - 1][col] === land) neighborLand -= 2;
        if (col > 0 && grid[row][col - 1] === land) neighborLand -= 2;

        perimeter += neighborLand;
      }
    }
  }

  return perimeter;
}

const grid1 = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
const grid2 = [[1]];
const grid3 = [[1, 0]];

islandPerimeter(grid1); //?
islandPerimeter(grid2); //?
islandPerimeter(grid3); //?

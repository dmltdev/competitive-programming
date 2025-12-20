/* 
3341. Find Minimum Time to Reach Last Room I
Medium
Topics
Companies
Hint
There is a dungeon with n x m rooms arranged as a grid.

You are given a 2D array moveTime of size n x m, where moveTime[i][j] represents the minimum time in seconds when you can start moving to that room. You start from the room (0, 0) at time t = 0 and can move to an adjacent room. Moving between adjacent rooms takes exactly one second.

Return the minimum time to reach the room (n - 1, m - 1).

Two rooms are adjacent if they share a common wall, either horizontally or vertically.

 

Example 1:

Input: moveTime = [[0,4],[4,4]]

Output: 6

Explanation:

The minimum time required is 6 seconds.

At time t == 4, move from room (0, 0) to room (1, 0) in one second.
At time t == 5, move from room (1, 0) to room (1, 1) in one second.
Example 2:

Input: moveTime = [[0,0,0],[0,0,0]]

Output: 3

Explanation:

The minimum time required is 3 seconds.

At time t == 0, move from room (0, 0) to room (1, 0) in one second.
At time t == 1, move from room (1, 0) to room (1, 1) in one second.
At time t == 2, move from room (1, 1) to room (1, 2) in one second.
Example 3:

Input: moveTime = [[0,1],[1,2]]

Output: 3

 

Constraints:

2 <= n == moveTime.length <= 50
2 <= m == moveTime[i].length <= 50
0 <= moveTime[i][j] <= 109
*/

function getNextRow(direction: number, currentRow: number): number {
  const map: Record<number, number> = {
    0: currentRow,
    1: currentRow + 1,
    2: currentRow,
    3: currentRow - 1,
  };

  return map[direction] || currentRow - 1;
}

function getNextCol(direction: number, currentCol: number): number {
  const map: Record<number, number> = {
    0: currentCol + 1,
    1: currentCol,
    2: currentCol - 1,
    3: currentCol,
  };

  return map[direction] || currentCol;
}

function minTimeToReach(moveTime: number[][]): number {
  const n = moveTime.length;
  const m = moveTime[0].length;
  const totalCells = n * m;

  const flattenedMoveTime = new Int32Array(totalCells);

  for (let row = 0; row < n; row++) {
    const rowStartIndex = row * m;
    const thisRow = moveTime[row];

    for (let col = 0; col < m; col++) {
      flattenedMoveTime[rowStartIndex + col] = thisRow[col];
    }
  }

  const distance = new Float64Array(totalCells);
  distance.fill(Infinity);
  distance[0] = 0;

  const nodeQueue: number[] = [0];

  for (let headIndex = 0; headIndex < nodeQueue.length; headIndex++) {
    const currentIndex = nodeQueue[headIndex];
    const currentTime = distance[currentIndex];
    const currentRow = (currentIndex / m) | 0;
    const currentCol = currentIndex % m;

    for (let direction = 0; direction < 4; direction++) {
      const nextRow =
        direction === 0
          ? currentRow
          : direction === 1
            ? currentRow + 1
            : direction === 2
              ? currentRow
              : currentRow - 1;
      const nextCol =
        direction === 0
          ? currentCol + 1
          : direction === 1
            ? currentCol
            : direction === 2
              ? currentCol - 1
              : currentCol;

      if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= m) {
        continue;
      }

      const neighborIndex = nextRow * m + nextCol;
      const departureTime =
        currentTime > flattenedMoveTime[neighborIndex]
          ? currentTime
          : flattenedMoveTime[neighborIndex];
      const arrivalTime = departureTime + 1;

      if (arrivalTime < distance[neighborIndex]) {
        distance[neighborIndex] = arrivalTime;
        nodeQueue.push(neighborIndex);
      }
    }
  }

  const finalTime = distance[totalCells - 1];

  return finalTime === Infinity ? -1 : finalTime;
}

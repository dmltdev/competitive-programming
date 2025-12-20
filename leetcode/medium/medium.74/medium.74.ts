/* 
74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

function flat(arr: any[]): number[] {
  return arr.reduce(
    (a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]),
    []
  );
}

function searchMatrix(matrix: number[][], target: number): boolean {
  const flattenedMatrix = flat(matrix);
  let start = 0;
  let end = flattenedMatrix.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (flattenedMatrix[middle] === target) {
      return true;
    } else if (flattenedMatrix[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
}

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
); //?

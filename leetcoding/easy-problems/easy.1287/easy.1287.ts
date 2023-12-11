/* 
1287. Element Appearing More Than 25% In Sorted Array

Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
Example 2:

Input: arr = [1,1]
Output: 1
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 105
*/

// Solution with the hash map. Time O(N), space O(N)
/*
function findSpecialInteger(arr: number[]): number {
  let counts = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const currentCount = counts.get(arr[i]) || 0;
    counts.set(arr[i], currentCount + 1);
  }

  let maxKey: number = 0;
  let maxValue = -Infinity;
  for (const [key, value] of counts) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
}
*/

// Given that the array is sorted already, we can find the number that occurs in >=25% cases with the arr.length/4
// This solution is better because space complexity is O(1).
function findSpecialInteger(arr: number[]): number {
  const quarter = Math.floor(arr.length / 4);

  for (let i = 0; i < arr.length - quarter; i++) {
    if (arr[i] == arr[i + quarter]) return arr[i];
  }

  return -1;
}

findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]); //?

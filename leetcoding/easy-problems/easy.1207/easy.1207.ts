/* 
1207. Unique Number of Occurrences

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/

// function uniqueOccurrences(arr: number[]): boolean {
//   const freq = new Map<number, number>();

//   // set frequency of each element
//   for (const num of arr) {
//     const currFreq = freq.get(num) || 0;
//     freq.set(num, currFreq + 1);
//   }

//   // retrieve map values into array
//   const values: number[] = Array.from(freq, ([_, value]) => value).sort(
//     (a, b) => a - b
//   );

//   // check for duplicate frequencies
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] === values[i + 1]) return false;
//   }

//   return true;
// }

function uniqueOccurrences(arr: number[]): boolean {
  const freq = new Map<number, number>();

  // set frequency of each element
  for (const num of arr) {
    const currFreq = freq.get(num) || 0;
    freq.set(num, currFreq + 1);
  }

  // unique frequencies
  const uniqueFreq = new Set(Array.from(freq.values()));

  // compare sizes of structures
  return freq.size === uniqueFreq.size;
}

uniqueOccurrences([1, 2, 2, 1, 1, 3]); //?

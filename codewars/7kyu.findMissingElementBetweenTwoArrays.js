/* 
7 kyu: Find the missing element between two arrays
https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/javascript

Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.

*/

// !Solution 1: create two array reducers and return their difference
/*
function findMissing(arr1, arr2) {
    let sum1 = arr1.reduce((a, i) => a + i);
    let sum2 = arr2.reduce((a, i) => a + i);
    return sum1 - sum2;
}
*/

// !Solution 2: create a helper function reducer and use it as a callback function inside the .reduce method when calculating the difference between reducers of two arrays.
function findMissing(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}

let array1 = [1, 2, 3];
let array2 = [1, 3];

console.log(findMissing(array1, array2));

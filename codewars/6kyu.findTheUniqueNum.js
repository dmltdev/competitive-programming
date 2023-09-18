/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

Find the unique number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

//! Use an array.filter and find a unique number that only appears once in the array using array methods indexOf() and lastIndexOf().
//! Then convert the array with a single element to a string with array.join('') and wrap everything in Number().
/*
function findUniq(arr) {
    return Number(arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).join(''))
}
*/

//! An easier method using array.find(). Array.find() returns a value, while array.filter returns an array with matching values;
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));

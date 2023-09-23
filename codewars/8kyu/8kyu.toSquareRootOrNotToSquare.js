/*
https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
8 kyu
To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/

//! Solution 1: My initial solution relies on using typeof number, !isNan(root), !Number.isInteger(root) to check if the number is floating or an integer.
/*
function squareOrSquareRoot(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let root = Math.sqrt(array[i]);
        if (
            typeof root === 'number' &&
            !isNaN(root) &&
            !Number.isInteger(root)
            ) {
                result.push(array[i] ** 2)
            } else {
                result.push(root);
            }
        }
        return result;
    }
    */

//! Solution 2: A simpler imperative solution that relies on using a modulo operator to check if the number is integer or floating. The most performant and elegant solution.
function squareOrSquareRoot(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let root = Math.sqrt(array[i]);
    root % 1 === 0 ? result.push(root) : result.push(array[i] ** 2);
  }
  return result;
}

//! Solution 3: Same as solution 2, but uses a declarative approach. Not bad, but I avoid it due to performance of array.map compared to for loop.
/*
function squareOrSquareRoot(array) {
    return array.map(x => {
        let root = Math.sqrt(x);
        return root % 1 === 0 ? root : x ** 2;
    })
}
*/

//! Solution 4: The most short declarative approach. I avoid it at all cost.
/*
const squareOrSquareRoot = a => a.map(x => Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x ** 2)
*/

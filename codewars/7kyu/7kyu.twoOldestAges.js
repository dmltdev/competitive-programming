/*

Two Oldest Ages
https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
*/

//! It would be better to use .toSpliced() not to mutate original array. However, VSCode currently does not recognize this ES2023 array method.
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).splice(-2);
}

let arr1 = [6, 5, 83, 5, 3, 18];
console.log(twoOldestAges(arr1));

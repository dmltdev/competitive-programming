/*
https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript
7 kyu
What dominates your array?

A zero-indexed array arr consisting of n integers is given. 
The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, 
returns the dominator of arr. The function should return −1 if array does not have a dominator. 
All values in arr will be >=0.

*/

function dominator(arr) {
  let maxCount = -1;
  let dominatorValue = -1;
  let set = new Set(arr);

  for (let element of set) {
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
      if (element === arr[i]) {
        currentCount++;
      }
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      dominatorValue = element;
    }
  }

  if (maxCount > arr.length / 2) {
    return dominatorValue;
  } else {
    return -1;
  }
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));

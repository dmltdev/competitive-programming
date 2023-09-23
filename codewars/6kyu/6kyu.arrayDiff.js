/*
Array.diff
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

//! Initial solution using a flag and two for loops
/* 
function arrayDiff(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        let found = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            res.push(a[i]);
        }
    }
    return res;
}
*/

//! Easy solution using an array.filter
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(arrayDiff([1, 2, 2], [1]));

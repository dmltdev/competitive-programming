/* 
Duplicate zeros

Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.
*/

let duplicateZeros = function (arr) {
  let len = arr.length;
  let i = 0;

  while (i < len) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 2;
    } else {
      i++;
    }
  }
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
arr;

/* 
2635. Apply Transform Over Each Element in Array
https://leetcode.com/problems/apply-transform-over-each-element-in-array/

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/

const map = function (arr, fn) {
  let res = new Int32Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i);
  }
  return res;
};

let arr1 = [1, 2, 3];

let fn1 = function plusone(n, i) {
  return n + i;
};

map(arr1, fn1); //?.

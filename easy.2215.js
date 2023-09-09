/*
2215. Find the Difference of Two Arrays
Easy

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.


*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  let result1 = [];
  let result2 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (!result1.includes(nums1[i])) {
        result1.push(nums1[i]);
      }
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (!result2.includes(nums2[i])) {
        result2.push(nums2[i]);
      }
    }
  }

  return [result1, result2];
};

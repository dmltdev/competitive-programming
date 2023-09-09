// Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = function (nums) {
  nums.forEach((num, index) => {
    nums[index] = Math.pow(num, 2);
  });
  nums.sort((a, b) => a - b);
  return nums;
};

let nums1 = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums1));

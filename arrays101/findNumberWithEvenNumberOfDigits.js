// Given an array nums of integers, return how many of them contain an even number of digits.

let findNumbers = function (nums) {
  let evenNumbers = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let digitLength = nums[i].toString().split("").length;
    if (digitLength % 2 === 0) {
      evenNumbers++;
    }
  }
  return evenNumbers;
};

let nums1 = [1, 234, 22, 2345, 123456];
console.log(findNumbers(nums1));

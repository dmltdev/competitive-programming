/*
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

const sumSquareEvenRootOdd = (nums) => {
  let sum = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum.push(Math.pow(nums[i], 2));
    } else {
      sum.push(Math.sqrt(nums[i]));
    }
  }
  return +sum.reduce((a, i) => a + i, 0).toFixed(2);
};

let arr = [2, 4, 6, 7];
console.log(sumSquareEvenRootOdd(arr));

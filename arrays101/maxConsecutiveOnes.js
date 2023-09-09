// Given a binary array nums, return the maximum number of consecutive 1's in the array.

let findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
      currentCount = 0;
    }
  }

  if (currentCount > maxCount) {
    maxCount = currentCount;
  }

  return maxCount;
};

const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));

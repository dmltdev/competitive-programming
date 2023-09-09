const moveZeroes = function (nums) {
  let slow = 0;
  let fast = slow + 1;

  while (fast <= nums.length - 1) {
    if (nums[slow] !== 0) {
      slow++;
      fast++;
    } else {
      if (nums[fast] !== 0) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        slow++;
      }
      fast++;
    }
  }
};

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);

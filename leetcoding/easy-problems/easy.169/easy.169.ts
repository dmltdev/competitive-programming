/* 
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

//! Initial solution: time complexity O(n), but space complexity is O(k). Utilizes hash map.
/*
function majorityElement(nums: number[]): number {
  let hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];

    if (!hash.has(key)) {
      hash.set(key, 1);
    } else {
      let newValue = hash.get(key);
      newValue++;

      hash.set(key, newValue);
    }
  }

  let maxValue = -Infinity;
  let maxKey = null;

  for (const [key, value] of hash.entries()) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
}
*/

//! Solution using the "Boyer-Moore Voting Algorithm" algorithm
function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

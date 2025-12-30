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

// Sort array + return a middle element
function majorityElement_sort(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);
  return nums[mid];
}

// Populate the frequency map, get min count and compare each key in map against min count
function majorityElement_hashmap(nums: number[]): number {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const curr = map.get(nums[i]) || 0;
    map.set(nums[i], curr + 1);
  }

  const minCount = Math.floor(nums.length / 2);

  for (const [k, v] of map) {
    if (v > minCount) {
      return Number(k);
    }
  }

  return 0;
}

// Boyer-Moore voting algorithm
function majorityElement_boyermoore(nums: number[]): number {
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

/* 
2461. Maximum Sum of Distinct Subarrays With Length K
Medium
Topics
premium lock icon
Companies
Hint
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
 

Constraints:

1 <= k <= nums.length <= 105
1 <= nums[i] <= 105
*/

function maximumSubarraySum(nums: number[], k: number): number {
  let maxSum = 0;
  let currentSum = 0;
  const freq = new Map<number, number>();

  // first window
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
    const currentCount = freq.get(nums[i]) || 0;
    freq.set(nums[i], currentCount + 1);
  }

  // check if first window is valid (all distinct)
  if (freq.size === k) {
    maxSum = currentSum;
  }

  // slide the window

  for (let i = k; i < nums.length; i++) {
    // remove leftmost element of prev window
    const leftNum = nums[i - k];
    currentSum -= leftNum;
    const leftCount = freq.get(leftNum) || 0;
    if (leftCount === 1) {
      freq.delete(leftNum);
    } else {
      freq.set(leftNum, leftCount - 1);
    }

    // add new rightmost element
    const rightNum = nums[i];
    currentSum += rightNum;
    const rightCount = freq.get(rightNum) || 0;
    freq.set(rightNum, rightCount + 1);

    // if current window is valid
    if (freq.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

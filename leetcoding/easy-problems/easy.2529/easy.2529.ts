/* 
2529. Maximum Count of Positive Integer and Negative Integer

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

 

Example 1:

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
Example 2:

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
Example 3:

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
 

Constraints:

1 <= nums.length <= 2000
-2000 <= nums[i] <= 2000
nums is sorted in a non-decreasing order.
 

Follow up: Can you solve the problem in O(log(n)) time complexity?
*/

function maximumCount(nums: number[]): number {
  const lastNegative = getIndexOfLastNegative(nums);
  const firstPositive = getIndexOfFirstPositive(nums);

  const countNegatives = lastNegative + 1;
  const countPositives = nums.length - firstPositive;

  return Math.max(countNegatives, countPositives);
}

function getIndexOfFirstPositive(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right + 1;
}

function getIndexOfLastNegative(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
}

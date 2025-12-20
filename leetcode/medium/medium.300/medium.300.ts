/* 
300. Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/

function bisectLeft(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length;

  while (left < right) {
    const mid: number = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function lengthOfLIS(nums: number[]): number {
  const res: number[] = [];

  for (const num of nums) {
    const i: number = bisectLeft(res, num);

    if (i === res.length) {
      res.push(num);
    } else {
      res[i] = num;
    }
  }
  return res.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //?

/*

1262. Greatest Sum Divisible by Three
Medium
Topics
premium lock icon
Companies
Hint
Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

 

Example 1:

Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
Example 2:

Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.
Example 3:

Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
 

Constraints:

1 <= nums.length <= 4 * 104
1 <= nums[i] <= 104
*/

export function maxSumDivThree(nums: number[]): number {
  const NEG = Number.NEGATIVE_INFINITY;
  let dp = [0, NEG, NEG];

  for (const x of nums) {
    const next = dp.slice();
    for (let remainder = 0; remainder < 3; remainder++) {
      if (dp[remainder] === NEG) continue;
      const newSum = dp[remainder] + x;
      const newRemainder = newSum % 3;
      next[newRemainder] = Math.max(next[newRemainder], newSum);
    }
    dp = next;
  }

  return Math.max(0, dp[0]);
}

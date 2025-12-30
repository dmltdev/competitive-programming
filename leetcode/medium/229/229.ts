/* 
229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 

Follow up: Could you solve the problem in linear time and in O(1) space?
*/

function majorityElement(nums: number[]): number[] {
  let candidate1 = 0,
    candidate2 = 1,
    count1 = 0,
    count2 = 0;

  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else {
      if (count1 === 0) {
        candidate1 = num;
        count1 = 1;
      } else if (count2 === 0) {
        candidate2 = num;
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    }
  }

  const result: number[] = [];

  if (nums.filter((n) => n === candidate1).length > nums.length / 3) {
    result.push(candidate1);
  }
  if (nums.filter((n) => n === candidate2).length > nums.length / 3) {
    result.push(candidate2);
  }

  return result;
}

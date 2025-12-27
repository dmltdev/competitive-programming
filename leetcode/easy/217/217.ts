/* 
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

// Method 1: Frequency Map
// Time O(n)
// Space O(n)
// This works, but the frequency count does not matter since we only care about presence, not count.
function containsDuplicate_v1(nums: number[]): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    const curr = map.get(nums[i]) || 0;
    map.set(nums[i], curr + 1);
  }

  return false;
}

function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

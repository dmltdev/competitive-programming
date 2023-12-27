/* 
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  let max = 0;
  const set: Set<number> = new Set(nums);

  set.forEach(num => {
    //* If the next number exists, the current number is not the start of a decreasing sequence
    if (set.has(num + 1)) return;
    //* Else the current number could be the start of a sequence (because it's the highest number)
    let count = 1;
    let curr = num - 1;

    while (set.has(curr)) {
      count++;
      curr--;
    }

    max = Math.max(count, max);
  });

  return max;
}

longestConsecutive([100,4,200,1,3,2])
/*
239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const maxSlidingWindow = function (nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

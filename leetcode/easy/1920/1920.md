# 1920. Build Array from Permutation

[1920. Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)

## Problem Statement

Given a zero-based permutation `nums` (0-indexed), build an array `ans` of the same length where `ans[i] = nums[nums[i]]` for each `0 <= i < nums.length` and return it.

A zero-based permutation `nums` is an array of distinct integers from `0` to `nums.length - 1` (inclusive).

**Constraints:**

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < nums.length`
- The elements in `nums` are distinct.

**Follow-up:** Can you solve it without using extra space (i.e., O(1) memory)?

## Example

**Input:**

```
nums = [0,2,1,5,3,4]
```

**Output:**

```
[0,1,2,4,5,3]
```

**Explanation:**
The array `ans` is built as follows:

- `ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]`
- `= [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]`
- `= [0,1,2,4,5,3]`

**Input:**

```
nums = [5,0,1,2,3,4]
```

**Output:**

```
[4,5,0,1,2,3]
```

**Explanation:**

- `ans = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]] = [4,5,0,1,2,3]`

## Algorithm

The problem asks us to construct a new array `ans` such that `ans[i] = nums[nums[i]]`. The straightforward approach is to create a new array and fill it using a single loop. However, the follow-up asks for an O(1) extra space solution (modifying `nums` in-place).

### Naive Approach (O(n) extra space)

- Create a new array `ans` of the same length as `nums`.
- For each index `i`, set `ans[i] = nums[nums[i]]`.
- Return `ans`.

### O(1) Extra Space Approach (Encoding Trick)

Since all values in `nums` are in the range `0` to `n-1`, we can encode both the old and new values in each element using modular arithmetic:

- For each index `i`, set:
  - `nums[i] = nums[i] + n * (nums[nums[i]] % n)`
- After this, the new value for each index is `Math.floor(nums[i] / n)`.

This works because `nums[nums[i]] % n` gives the original value at `nums[nums[i]]` (since all values are less than `n`), and multiplying by `n` ensures the new value does not interfere with the original value.

## Code

```ts
function buildArray(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] + n * (nums[nums[i]] % n);
  }
  for (let i = 0; i < n; i++) {
    nums[i] = Math.floor(nums[i] / n);
  }
  return nums;
}
```

## Complexity

- **Time Complexity:** O(n)
  - We loop through the array twice, each in O(n) time.
- **Space Complexity:** O(1)
  - We modify the input array in-place and use only a constant amount of extra space.

## Summary

- The problem can be solved directly with an extra array, but the follow-up requires an in-place solution.
- By encoding both the old and new values in each element, we can achieve O(1) extra space.
- This trick leverages the constraints that all values are in the range `0` to `n-1`.

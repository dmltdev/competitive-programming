function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // avoid duplicate triplets

  for (let i = 0; i < nums.length; i++) {
    // skip if curr duplicates prev
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];

      if (total > 0) {
        // if sum > 0, decrement `k` to decrease the total sum
        k--;
      } else if (total < 0) {
        // if sum < 0, increment `j` pointer to increase the total sum
        j++;
      } else {
        // sum = 0, add the triplet to the result list
        result.push([nums[i], nums[j], nums[k]]);
        j++;

        // increment `j` to skip any duplicate elements
        // moving `j` forward will eventually break out of invalid combinations
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return result;
}

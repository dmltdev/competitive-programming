function shuffle(nums: number[], n: number): number[] {
  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }

  return ans;
}

const a = shuffle([2, 5, 1, 3, 4, 7], 3);

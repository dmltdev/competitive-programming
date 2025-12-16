function smallerNumbersThanCurrent(nums: number[]): number[] {
  const freq = new Uint16Array(101);

  for (const n of nums) {
    freq[n]++;
  }

  let sum = 0;
  let i = 0;
  while (i < freq.length) {
    const count = freq[i];
    freq[i] = sum;
    sum += count;
    i++;
  }

  const result: number[] = [];

  for (const n of nums) {
    result.push(freq[n]);
  }

  return result;
}

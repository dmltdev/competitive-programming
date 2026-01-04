function sumFourDivisors(nums: number[]): number {
  let totalSum = 0;

  for (const num of nums) {
    const divisors = new Set<number>();
    const sqrt = Math.floor(Math.sqrt(num));

    for (let i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        divisors.add(i);
        divisors.add(num / i);
      }
    }

    if (divisors.size === 4) {
      totalSum += Array.from(divisors).reduce<number>((a, b) => a + b, 0);
    }
  }

  return totalSum;
}

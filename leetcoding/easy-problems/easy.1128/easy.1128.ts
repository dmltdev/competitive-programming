function numEquivDominoPairs(dominoes: number[][]): number {
  const count = new Map<string, number>();

  for (const [a, b] of dominoes) {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    count.set(key, (count.get(key) || 0) + 1);
  }

  let result = 0;

  for (const [key, value] of count.entries()) {
    result += (value * (value - 1)) / 2;
  }

  return result;
}

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
); // 1

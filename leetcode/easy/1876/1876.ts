function countGoodSubstrings(s: string): number {
  if (s.length < 3) return 0;

  let count = 0;
  const k = 3;

  for (let i = 0; i <= s.length - k; i++) {
    const freq = new Set<string>();

    for (let j = i; j < i + k; j++) {
      freq.add(s[j]);
    }

    if (freq.size === k) {
      count++;
    }
  }

  return count;
}

function extractElementsBetweenPositions(numbers, n, m) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  
  return numbers.slice(min, max + 1);
}

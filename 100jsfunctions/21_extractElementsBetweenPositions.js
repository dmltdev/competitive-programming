function extractElementsBetweenPositions(numbers, n, m) {
  return numbers.slice(Math.min(n, m), Math.max(n, m) + 1);
}

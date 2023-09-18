export const findAverage = (array: number[]): number =>
  array.reduce((a, i) => a + i, 0) / array.length || 0;

console.log(findAverage([]));

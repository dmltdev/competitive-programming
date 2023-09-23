const squareSum = (numbers: number[]): number =>
  numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));

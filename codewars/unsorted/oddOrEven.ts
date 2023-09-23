const oddOrEven = (array: number[]): string =>
  array.reduce((a, i) => a + i, 0) % 2 === 0 ? "even" : "odd";

console.log(oddOrEven([1, 2, 5]));

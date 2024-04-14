function sum(numbers) {
  'use strict';
  if (numbers.length === 0) return 0;
  let result = 0;

  for (const num of numbers) {
    if (typeof num === 'number') result += num;
  }

  return result;
}

console.log(sum([])); //
console.log(sum([1, 5.2, 4, 0, -1]));

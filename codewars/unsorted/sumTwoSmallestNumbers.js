"use strict";
const sumTwoSmallestNumbers = (numbers) => numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, i) => a + i);
console.log(sumTwoSmallestNumbers([1, 7, 25, 4, 29]));
console.log(sumTwoSmallestNumbers([-5, -341, 17, 81231, -123, -55, -99, -255]));
//# sourceMappingURL=sumTwoSmallestNumbers.js.map
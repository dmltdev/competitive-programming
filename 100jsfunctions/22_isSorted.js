function isSorted(numbers) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      isAscending = false;
    }
    if (numbers[i] < numbers[i + 1]) {
      isDescending = false;
    }
  }

  return isAscending || isDescending;
}

//* Solution 2: more time and space complexity.
// function isSorted(numbers) {
//   const originalArray = [...numbers];
//   const ascendingArray = [...numbers].sort((a, b) => a - b);
//   const descendingArray = [...ascendingArray].reverse();

//   const isSame = (val, i, arr) => val === originalArray[i];

//   const isAscending = ascendingArray.every(isSame);
//   const isDescending = descendingArray.every(isSame);

//   return isAscending || isDescending;
// }

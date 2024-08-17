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
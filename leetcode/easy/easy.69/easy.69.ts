const mySqrt = function (num: number): number {
  let start = 1,
    end = num;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (middle ** 2 == num) {
      return middle;
    }

    if (middle ** 2 > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return end;
};

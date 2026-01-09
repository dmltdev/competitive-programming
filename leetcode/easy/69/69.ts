function mySqrt(x: number): number {
  let start = 1;
  let end = x;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

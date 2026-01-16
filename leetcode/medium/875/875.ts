function minEatingSpeed(piles: number[], hours: number): number {
  let left = 1;
  let right = piles.reduce((sum, p) => sum + p, 0);
  let result = right;

  function canFinish(k: number): boolean {
    let hoursNeeded = 0;
    for (const pile of piles) {
      hoursNeeded += Math.ceil(pile / k);
    }
    return hoursNeeded <= hours;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canFinish(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

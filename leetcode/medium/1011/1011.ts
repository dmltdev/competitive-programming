function shipWithinDays(weights: number[], days: number): number {
  let left = Math.max(...weights);
  let right = weights.reduce((sum, w) => sum + w, 0);
  let result = right;

  function canShip(capacity: number): boolean {
    let ships = 1;
    let currentCapacity = capacity;

    for (const weight of weights) {
      if (currentCapacity - weight < 0) {
        ships++;
        currentCapacity = capacity;
      }
      currentCapacity -= weight;
    }

    return ships <= days;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canShip(mid)) {
      result = Math.min(result, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

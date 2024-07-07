function getMaxMovingDistance(budget, weight, cost) {
  const costPerKm = cost / 100 / (weight / 10);
  const maxKilometers = budget / costPerKm;

  return maxKilometers;
}

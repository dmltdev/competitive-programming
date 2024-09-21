/**
 * @param {number} number
 */
function biggestPowerOf2(number) {
  if (number < 1) {
    return -1;
  }

  let power = 0;
  while (number >= 2) {
    number /= 2;
    power++;
  }

  return power;
}

export { biggestPowerOf2 };

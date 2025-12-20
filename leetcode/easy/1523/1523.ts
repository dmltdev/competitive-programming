/**
 * Counts odd numbers in the inclusive range [low, high].
 *
 * Uses bit shifting for integer division:
 * - (high + 1) >> 1 = count of odds from 0 to high
 * - low >> 1 = count of odds from 0 to low-1
 * - Subtract to get odds in [low, high]
 *
 * @param low - Start of range (inclusive)
 * @param high - End of range (inclusive)
 * @returns Count of odd numbers in range
 *
 * @example
 * countOdds(3, 7) // 3 (numbers: 3, 5, 7)
 * countOdds(2, 6) // 2 (numbers: 3, 5)
 */
function countOdds(low: number, high: number): number {
  return ((high + 1) >> 1) - (low >> 1);
}

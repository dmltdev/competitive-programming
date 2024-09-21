/**
 * @param {number[]} numbers
 */
// function areValuesUnique(numbers) {
//   return numbers.every(
//     (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
//   );
// }

/**
 * @param {number[]} numbers
 */
function areValuesUnique(numbers) {
  const map = new Map();

  for (const num of numbers) {
    if (map.has(num)) {
      return false;
    }
    map.set(num, true);
  }

  return true;
}

export { areValuesUnique };

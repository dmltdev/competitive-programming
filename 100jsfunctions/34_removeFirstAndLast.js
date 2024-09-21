/**
 * Description placeholder
 *
 * @param {string} source
 * @param {string} target
 */
function removeFirstAndLast(source, target) {
  const firstOccurrenceIndex = source.indexOf(target);
  const lastOccurrenceIndex = source.lastIndexOf(target);

  if (firstOccurrenceIndex === -1) {
    return source;
  }

  return (
    source.slice(0, firstOccurrenceIndex) +
    source.slice(firstOccurrenceIndex + target.length, lastOccurrenceIndex) +
    source.slice(lastOccurrenceIndex + target.length)
  );
}

const result = removeFirstAndLast("Hello world", "l");
console.log(result);

export { removeFirstAndLast };

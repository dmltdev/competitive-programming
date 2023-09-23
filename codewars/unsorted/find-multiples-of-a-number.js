function findMultiples(integer, limit) {
  let initialValue = integer;
  let arr = [initialValue];
  while (
    integer < limit &&
    integer % initialValue === 0 &&
    limit - integer >= initialValue
  ) {
    integer += initialValue;
    arr.push(integer);
  }
  return arr;
}

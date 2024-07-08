function diffArrays(numbers1, numbers2) {
  const difference = (a, b) => a.filter(num => !b.includes(num));

  const diff1 = difference(numbers1, numbers2);
  const diff2 = difference(numbers2, numbers1);

  return [...diff1, ...diff2];
}

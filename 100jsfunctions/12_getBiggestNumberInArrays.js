function getBiggestNumberInArrays(numbers1, numbers2) {
  const numbers = [...numbers1, ...numbers2];
  return Math.max(...numbers);
}

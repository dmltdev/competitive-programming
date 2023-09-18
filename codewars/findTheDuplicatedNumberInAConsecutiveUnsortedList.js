function findDup(arr) {
  return arr.sort().filter((el) => arr.indexOf(el) != arr.lastIndexOf(el))[0];
}

console.log(findDup([1, 2, 2, 3]));

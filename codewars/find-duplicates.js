// https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript

// Method 1
function duplicates(arr) {
  arr = arr.map((str) => parseInt(str, 10));

  let duplicates = [];
  let seenSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (
      arr.indexOf(element) !== arr.lastIndexOf(element) &&
      !seenSet.has(element)
    ) {
      duplicates.push(element);
      seenSet.add(element);
    }
  }

  return duplicates;
}

// Tests

const testArr = [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"];
const testArr2 = [0, 1, 2, 3, 4, 5];
console.log(duplicates(testArr));
console.log(duplicates(testArr2));

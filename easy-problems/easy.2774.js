Array.prototype.upperBound = function (target) {
  //return this.lastIndexOf(target);
  let res = this;
  for (let i = res.length; i >= 0; i--) {
    if (res[i] === target) {
      return i;
    }
  }
  return -1;
};

// Simple tests
const nums = [3, 4, 5];
nums.upperBound(5); //?
console.log(Array.isArray(nums)); // Ensuring that the array is not mutated

const test = [2, 3, 4, 9, 13, 15, 19, 33, 33, 33, 42, 50];
test.join(""); //?
test.upperBound(33); //?

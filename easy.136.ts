/*
 */

//! Declarative solution using array.find that either returns a result of the condition inside the array.find or 0
/*
function singleNumber(nums: number[]): number {
  return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num)) || 0;
}
*/

//! Imperative solution using a for loop
/*
function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
  return 0;
}
*/

//! Solution using a XOR ^ bitwise operator
function singleNumber(nums: number[]): number {
  let uniqNum = 0;
  for (let i = 0; i < nums.length; i++) {
    uniqNum = uniqNum ^ nums[i];
  }
  return uniqNum;
}

let test: number[] = [1, 0, -1];
singleNumber(test); //?

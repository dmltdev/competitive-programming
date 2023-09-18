/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(n) {
  let digits = n.toString().split("");

  let pivot = -1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (+digits[i] > +digits[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  // return -1 if no pivot
  if (pivot === -1) return pivot;

  // splice the digits in the pivot
  let right = digits.splice(pivot);

  // extract pivot
  let newPivot = right.splice(0, 1)[0];

  // find the lowest number that is bigger than a newPivot
  let lowest = null,
    lowestIndex = null;
  for (let i = 0; i < right.length; i++) {
    if (right[i] > newPivot) {
      if (lowest === null || right[i] < lowest) {
        lowest = right[i];
        lowestIndex = i;
      }
    }
  }

  if (lowestIndex === null) return -1;

  right.splice(lowestIndex, 1);
  right.push(newPivot);
  right = right.sort();

  // concatenate left, new pivot, and the right part
  let result = +digits.concat([lowest]).concat(right).join("");
  if (result < n) return -1;

  return result;
}

nextBigger(121); //?

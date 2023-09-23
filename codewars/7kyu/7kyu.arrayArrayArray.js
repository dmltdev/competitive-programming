/*
https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

/*//!Initial solution
function explode(x){
    let [a,b] = x;
    let score = null;
    if (Number.isFinite(a) && Number.isFinite(b)) {
        score = a + b;
    } else if (Number.isFinite(a) && !Number.isFinite(b)) {
        score = a;
    } else if (!Number.isFinite(a) && Number.isFinite(b)) {
        score = b;
    } 

    let arr = [];
    if (typeof score === "number") {
        while (arr.length < score) {
            arr.push(x);
        }
    } else {
        return "Void!"
    }
    return arr;
}
*/

//! Simpler and shorter solution using new Array() constructor and .fill method
function explode(x) {
  let [a, b] = x;

  if (typeof a == "number" && typeof b == "number")
    return new Array(a + b).fill(x);
  else if (typeof a == "number") return new Array(a).fill(x);
  else if (typeof b == "number") return new Array(b).fill(x);

  return "Void!";
}

console.log(explode([3, 5]));

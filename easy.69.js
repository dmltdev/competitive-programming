/*
69. Sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/

const mySqrt = (x) => {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

mySqrt(102); //?
mySqrt(105); //?
mySqrt(232); //?
mySqrt(5213); //?
mySqrt(1123213); //?
mySqrt(45734254); //?

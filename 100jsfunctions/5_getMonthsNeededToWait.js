/* 
5.getMonthsNeededToWait
Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.

The function should return the number of months we have to wait, to get from the first month to the second one.

Example 1
Input
index1

=
1
index2

=
3
Output
2
Explanation
The month with index 1 is February and the month with index 3 is April. So, the number of months needed to wait is 2.

Example 2
Input
index1

=
11
index2

=
0
Output
1
Explanation
The month with index 11 is December and the month with index 0 is January. So, the number of months needed to wait is 1.
*/

function getMonthsNeededToWait(index1, index2) {
  if (index1 > index2) {
    return 12 - index1 + index2;
  }
  return Math.abs(index1 - index2);
}

const m1 = getMonthsNeededToWait(11, 0);
console.log(m1);

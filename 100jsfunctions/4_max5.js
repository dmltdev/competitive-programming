/* 
4.max5
Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them.

Example 1
Input
nr1

=
19
nr2

=
12
nr3

=
2
nr4

=
-31
nr5

=
19.5
Output
19.5
*/

function max5(nr1, nr2, nr3, nr4, nr5) {
  return Math.max(...arguments);
}

const max1 = max5(1, 2, 3, 4, 5);
console.log(max1);

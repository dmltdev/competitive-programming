/*
42.compareSets
Write a function named compareSets that receives 2 parameters.

a Set of numbers - setA
a Set of numbers - setB
The function should compare the 2 sets and return an Object with the following properties:

onlyA - a Set with all elements inside setA that are not part of setB
onlyB - a Set with all elements inside setB that are not part of setA
union - a Set with all elements inside setA and setB
Example 1
Input
setA

=
Set(4)
<entries>: (4) [ 1, 2, 3, 4 ]
size: 4
<prototype>: Object
setB

=
Set(4)
<entries>: (4) [ 3, 4, 5, 6 ]
size: 4
<prototype>: Object
Output
{…}
onlyA: Set(2) {<entries>: Array(2), size: 2 }
onlyB: Set(2) {<entries>: Array(2), size: 2 }
union: Set(6) {<entries>: Array(6), size: 6 }
<prototype>: Object
 */
function compareSets(setA, setB) {
  const onlyA = new Set([...setA].filter(x => !setB.has(x)));
  const onlyB = new Set([...setB].filter(x => !setA.has(x)));
  const union = new Set([...setA, ...setB]);

  return { onlyA, onlyB, union };
}

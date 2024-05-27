/*
26.arrayToObject
Write a function named arrayToObject that receives an array of strings as parameter and returns an object where each key is an item of the array and its value is the index of that item.

If there are duplicate strings in the array, the value inside the object should be the index of it's first occurrence.

Example 1
Input
strings

=
Array(3)
0: "JavaScript"
1: "is"
2: "awesome"
<prototype>: (0) [ ]
Output
{…}
JavaScript: 0
awesome: 2
is: 1
<prototype>: Object
Example 2
Input
strings

=
Array(10)
0: "My"
1: "name"
2: "is"
3: "Pava"
4: "."
5: "What"
6: "is"
7: "your"
8: "name"
9: "?"
<prototype>: (0) [ ]
Output
{…}
.: 4
?: 9
My: 0
Pava: 3
What: 5
is: 2
name: 1
your: 7
<prototype>: Object

*/

function arrayToObject(strings) {
  const result = {};

  for (let i = 0; i < strings.length; i++) {
    if (!(strings[i] in result)) {
      result[strings[i]] = i;
    }
  }

  return result;
}

const strings = ['JavaScript', 'is', 'awesome'];

console.log(arrayToObject(strings));

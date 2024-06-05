/* 
Write a function named getUserObject that receives 3 parameters:

a string named firstName
a string named lastName
a number named age
and returns an object representing an user, with the properties name and age.

Example 1
Input
firstName

=
"Jon"
lastName

=
"Doe"
age

=
31
Output
{…}
age: 31
name: "Jon Doe"
<prototype>: Object
*/

function getUserObject(firstName, lastName, age) {
  return {
    age,
    name: `${firstName} ${lastName}`,
  };
}

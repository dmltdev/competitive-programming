/* 
7 kyu
Leap Years

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.

*/

function isLeapYear(year) {
  if (0 == year % 400) return true;
  if (0 == year % 100) return false;
  if (0 == year % 4) return true;
  return false;
}

//! Tests
isLeapYear(1234); //? false
isLeapYear(1984); //? true
isLeapYear(2000); //? true
isLeapYear(2010); //? false
isLeapYear(2013); //? false

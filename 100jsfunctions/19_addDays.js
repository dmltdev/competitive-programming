/*
19.addDays

Write a function named addDays that receives 2 parameters:

    a date - initialDate
    a number - daysCount

and returns a new date created by adding daysCount days to initialDate.
Example 1
Input

initialDate
=

    Date Mon May 01 2023 13:00:00 GMT+0300 (Eastern European Summer Time)

daysCount
=

    11

Output

    Date Fri May 12 2023 13:00:00 GMT+0300 (Eastern European Summer Time)

Example 2
Input

initialDate
=

    Date Sat Feb 09 2013 14:37:00 GMT+0200 (Eastern European Standard Time)

daysCount
=

    3

Output

    Date Tue Feb 12 2013 14:37:00 GMT+0200 (Eastern European Standard Time)
*/

function addDays(initialDate, daysCount) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return new Date(initialDate.getTime() + daysCount * millisecondsPerDay);
}

const date1 = new Date("2022-01-20");
const date2 = addDays(date1, 10);
console.log(date2);

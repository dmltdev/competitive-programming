/*
2758. Next Day
Easy

Write code that enhances all date objects such that you can call the date.nextDay() method on any date object 
and it will return the next day in the format YYYY-MM-DD.



Example 1:

Input: date = "2014-06-20"
Output: "2014-06-21"
Explanation: 
const date = new Date("2014-06-20");
date.nextDay(); // "2014-06-21"
Example 2:

Input: date = "2017-10-31"
Output: "2017-11-01"
Explanation: The day after 2017-10-31 is 2017-11-01.
*/

Date.prototype.nextDay = function () {
  const nextDay = this.getTime() + 24 * 60 * 60 * 1000;
  return new Date(nextDay).toISOString().split("T")[0];
};

const date = new Date("2014-06-20");
date.nextDay(); //?

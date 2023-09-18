/*
Task
A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number s, find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

Input/Output
[input] string s

A masked number.

1 ≤ inputString.length ≤ 10000.

[output] a string array

Sorted array of strings representing all non-negative integers that correspond to the given mask and are divisible by 6.

Example
For s = "1*0", the output should be ["120", "150", "180"].

For s = "*1", the output should be [].

For s = "1234567890123456789012345678*0",

the output should be

[
"123456789012345678901234567800",
"123456789012345678901234567830",
"123456789012345678901234567860",
"123456789012345678901234567890"]```
As you can see, the masked number may be very large ;-)

*/

function isDivisibleBy6(str) {
  let ret = [];
  for (let i = 0; i < 10; i++) {
    let temp = str.replace("*", i);
    if (isDivisibleBy2(temp) && isDivisibleBy3(temp)) {
      ret.push(temp);
    }
  }
  return ret;
}

function isDivisibleBy2(str) {
  let lastDigit = Number(str.slice(-1));
  return lastDigit % 2 === 0;
}

function isDivisibleBy3(str) {
  var digits = str.split("").map(Number);

  var sum = digits.reduce((a, i) => a + i);

  return sum % 3 === 0;
}

isDivisibleBy6("1*0"); //?

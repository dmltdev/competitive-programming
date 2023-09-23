/*
Bin to Decimal
https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript

Complete the function which converts a binary number (given as a string) to a decimal number.
*/

function binToDec(bin) {
  return parseInt(bin, 2);
}

//! Tests
let arr1 = "1001001";
console.log(binToDec(arr1));

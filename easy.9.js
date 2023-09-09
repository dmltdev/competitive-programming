/* 
9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

*/

const isPalindrome = function (x) {
  return x === parseInt(x.toString().split("").reverse().join(""), 10);
};

console.log(isPalindrome(121));

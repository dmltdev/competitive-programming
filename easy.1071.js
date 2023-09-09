/*
1071. Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
//! Solution using recursion with the Euclidean algorithm
/*
const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  const divisor = (m, n) => (0 === n ? m : divisor(n, m % n));
  return str1.substring(0, divisor(str1.length, str2.length));
};
*/

//! Solution using recursion and string.slice method:
const gcdOfStrings = (str1 = "", str2 = "") => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  } else if (str1 == str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  } else {
    return gcdOfStrings(str2.slice(str1.length), str1);
  }
};

let str1 = "ABCABC",
  str2 = "ABC";
gcdOfStrings(str1, str2);

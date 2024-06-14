/*
Write a function named getLongestString that receives an Array of strings as parameter and returns the longest one.

If the Array is empty, return an empty string.

If there are multiple strings of the same maximum length, return the first one.

*/

function getLongestString(arrayOfStrings) {
  if (arrayOfStrings.length === 0) return '';
  let longestStr = '';

  for (const str of arrayOfStrings) {
    if (str.length > longestStr.length) longestStr = str;
  }

  return longestStr;
}

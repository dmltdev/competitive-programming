/* 
7.lastNRevert
Write a function named lastNRevert that receives 2 parameters:

a string named text
a number - n
and returns the last n characters of text but in reverse order.

Example 1
Input
text

=
"T-shirts"
n

=
4
Output
"stri"
Explanation
Last 4 characters are irts and their reversed order is stri.
*/

function lastNRevert(text, n) {
  const lastNChars = text.slice(text.length - n, text.length);

  // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  function reverseString(str) {
    if (str == '') return '';

    return reverseString(str.substr(1)) + str.charAt(0);
  }

  return reverseString(lastNChars);
}

const rev1 = lastNRevert('T-shirts', 4);
console.log(rev1);

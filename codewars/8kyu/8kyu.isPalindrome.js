/*
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

Write a function that checks if a given string (case insensitive) is a palindrome. 
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama". 
*/

function isPalindrome(x) {
  x = x.toLowerCase();
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

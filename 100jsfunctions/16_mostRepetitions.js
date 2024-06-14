/* 
16.mostRepetitions

Write a function named mostRepetitions that receives 3 parameters:

    a string - string1
    a string - string2
    a letter

and returns the string that has the most occurrences of the specified letter. If both have the same number of occurrences return string1.
*/

function mostRepetitions(str1, str2, letter) {
  let left = 0;
  let right = 0;

  for (const str of str1) {
    if (str === letter) left++;
  }

  for (const str of str2) {
    if (str === letter) right++;
  }

  return left > right ? str1 : left === right ? str1 : str2;
}

console.log(mostRepetitions('Los Angeles', 'Texas', 's'));

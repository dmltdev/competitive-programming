/* 
16.mostRepetitions

Write a function named mostRepetitions that receives 3 parameters:

    a string - string1
    a string - string2
    a letter

and returns the string that has the most occurrences of the specified letter. If both have the same number of occurrences return string1.
*/

function stringOccurrence(str, letter) {
  let counter = 0;

  for (const char of str) if (char === letter) counter++;

  return counter;
}

function mostRepetitions(str1, str2, letter) {
  const left = stringOccurrence(str1, letter);
  const right = stringOccurrence(str2, letter);

  if (left > right) return str1;
  if (right > left) return str2;

  return str1;
}

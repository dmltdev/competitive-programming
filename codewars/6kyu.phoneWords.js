/*
https://www.codewars.com/kata/635b8fa500fba2bef9189473/train/javascript
6 kyu: Phone Words

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:
https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/1024px-Telephone-keypad2.svg.png

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

0 is a space in the string.
1 is used to separate letters with the same number.
always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
you cannot return digits.
Given a empty string, return empty string.
Return a lowercase string.

*/

function phoneWords(input) {
  const keyPads = {
    0: " ",
    1: "separator", //! Separate letters with the same number
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = "";
  let currentChar = "";
  let prevChar = "";
  let consecutiveCount = 0;

  for (let i = 0; i < input.length; i++) {
    currentChar = input[i];

    if (currentChar === "0") {
      result += " ";
      continue;
    }

    if (currentChar === "1") {
      if (prevChar !== "") {
        result += prevChar;
        prevChar = "";
        consecutiveCount = 0;
      }
      continue;
    }

    const letters = keyPads[currentChar];
    if (letters !== undefined) {
      const maxIndex = Math.max(0, consecutiveCount - 1);
      const letter = letters[maxIndex];

      if (maxIndex === letters.length - 1 && prevChar !== "1") {
        result += letter;
        prevChar = letter;
        consecutiveCount = 0;
      } else {
        prevChar = letter;
        consecutiveCount++;
      }
    }
  }

  return result;
}

console.log(phoneWords("443355555566604466690277733099966688"));

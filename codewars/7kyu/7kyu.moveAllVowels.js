/*
7 kyu | Move all vowels
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
  const vowels = ["a", "e", "i", "o", "u"];

  let res = [],
    resVowels = [];
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      resVowels.push(input[i]);
    } else {
      res.push(input[i]);
    }
  }
  return res.concat(resVowels).join("");
}

moveVowel("peace"); //?

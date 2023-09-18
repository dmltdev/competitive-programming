/*
In input string word(1 word):

replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). 
For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
*/

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const vowels = ["a", "e", "i", "o", "u"];

function replaceLetters(word) {
  let newWord = "";
  const wordLength = word.length;

  for (let i = 0; i < wordLength; i++) {
    const currentChar = word[i];

    if (vowels.includes(currentChar)) {
      let currentIndex = alphabet.indexOf(currentChar);

      // Find the nearest left consonant
      let leftConsonantIndex = currentIndex;
      while (!consonants.includes(alphabet[leftConsonantIndex])) {
        leftConsonantIndex =
          (leftConsonantIndex - 1 + alphabet.length) % alphabet.length;
      }
      newWord += alphabet[leftConsonantIndex];
    } else if (consonants.includes(currentChar)) {
      let currentIndex = alphabet.indexOf(currentChar);

      // Find the nearest right vowel
      let rightVowelIndex = currentIndex;
      while (!vowels.includes(alphabet[rightVowelIndex])) {
        rightVowelIndex = (rightVowelIndex + 1) % alphabet.length;
      }
      newWord += alphabet[rightVowelIndex];
    } else {
      newWord += currentChar;
    }
  }

  return newWord;
}

console.log(replaceLetters("dodezatt"));

/* 
Count consonants

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

function consonantCount(str) {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      count++;
    }
  }

  return count;
}

//! Tests

let string = "aeiou letter";
console.log(consonantCount(string));

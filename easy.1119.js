/*
1119. Remove Vowels from a String

Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Example 1:

Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: s = "aeiou"
Output: ""
*/

/*
const removeVowels = str => {
    return str
    .split('')
    .filter(char => !['a','e','i','o','u'].includes(char))
    .join('')
}
*/

const removeVowels = function (str) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let res = "";

  for (let i of str) {
    if (!set.has(i)) {
      res += i;
    }
  }

  return res;
};

let s = "aeiou";
let s2 = "leetcodeisacommunityforcoders";
console.log(removeVowels(s)); // ''
console.log(removeVowels(s2)); // "ltcdscmmntyfrcdrs"

/* 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

//! Solution 1: uses for loop to iterate through array and return false if the values of two sorted arrays on the same index do not equal each other.
/* 
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    s = s.split('').sort()
    t = t.split('').sort()
    
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false
        }
    }

    return true
}
*/

//! Solution 2: Declarative approach using array.every and initiailizing const variables for sorted arrays.
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  return sortedS.every((char, index) => char === sortedT[index]);
};

let s = "anagram";
let t = "nagaram";
let s2 = "cat";
let t2 = "rat";

console.log(isAnagram(s, t));
console.log(isAnagram(s2, t2));

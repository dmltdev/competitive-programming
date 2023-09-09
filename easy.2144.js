/*
2114. Maximum Number of Words Found in Sentences
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

let mostWordsFound = function (sentences) {
  let max = 0;
  for (sentence of sentences) {
    let words = sentence.split(" ");
    if (words.length > max) {
      max = words.length;
    }
  }
  return max;
};

//! Tests

let example1 = ["please wait", "continue to fight", "continue to win"];
let example2 = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
console.log(mostWordsFound(example1));
console.log(mostWordsFound(example2));

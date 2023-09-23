/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

//! Initial solution
/*
String.prototype.toJadenCase = function () {
    let temp = this.split(' ');
    for (let i = 0; i < temp.length; i++) {
        let firstLetter = temp[i][0];
        temp[i] = firstLetter.toUpperCase() + temp[i].substring(1);;
    }
    return temp.join(' ');
};
*/

//! Shorter and simpler
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

//! Test
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());

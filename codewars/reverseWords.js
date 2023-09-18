"use strict";
const reverseWords = (str) => {
    let words = str.split(" ");
    words = words.map((word) => {
        return word.split("").reverse().join("");
    });
    return words.join(" ");
};
console.log(reverseWords("Hello world!"));
//# sourceMappingURL=reverseWords.js.map
const reverseWords = (str: string) => {
  let words: string[] = str.split(" ");
  words = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return words.join(" ");
};

console.log(reverseWords("Hello world!"));

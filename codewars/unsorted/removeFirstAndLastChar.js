// Solution 1
const array = (str) => {
  let arr = str.replaceAll(",", " ").split(" ");
  return arr.length < 3
    ? null
    : arr
        .filter((item) => item != "")
        .slice(1, -1)
        .join(" ");
};

// Solution 2 (more concise and efficient)
const array2 = (arr) => arr.split(`,`).slice(1, -1).join(` `) || null;

console.log(array("A1,B1")); //?.
console.log(array2("A1,B1")); //?.
console.log(array("1, 2, 3, 4, 5")); //?.
console.log(array2("1, 2, 3, 4, 5")); //?.
console.log(array("apple, banana, cherry, date")); //?.
console.log(array2("apple, banana, cherry, date")); //?.

console.log(1 + 1);
console.log("1" + 1);
console.log("1" + "1");
console.log(1 + "1");

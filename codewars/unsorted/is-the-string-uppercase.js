String.prototype.isUpperCase = function () {
  let arr = this.split(" ");
  const same = (el) => el === el.toUpperCase();
  return arr.every(same);
};

let str1 = "HELLo WORLD";

console.log(str1.isUpperCase());

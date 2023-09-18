const numObj = (numbers) =>
  numbers.map((number) => ({
    [number.toString()]: String.fromCharCode(number),
  }));

let test1 = [117, 122, 120, 1, 2, 3, 4, 5, 6, 7, 9, 123];
console.log(numObj(test1));

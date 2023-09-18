const toNumberArray = (stringarray: string[]): number[] =>
  stringarray.map(Number);

console.log(toNumberArray(["1", "2", "3", "4", "5", "6"]));

//! Method 1: use array.filter and array of vowels
/*
export class Kata {
  static getCount(str: string): number {
    let vowels: string[] = ['a','e','i','o','u'];
    return str.split('').filter(letter => vowels.includes(letter)).length;
  }
}
*/

//! Method 2: use regex str.prototype.match
export class Kata {
  static getCount(str: string) {
    let filter = str.match(/[aeiou]/gi);
    return filter ? filter.length : 0;
  }
}

console.log(Kata.getCount("abracadabra"));

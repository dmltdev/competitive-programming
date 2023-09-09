/* 
2695. Array Wrapper

https://leetcode.com/problems/array-wrapper/
Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:
When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
*/

class ArrayWrapper {
  constructor(arr) {
    this.array = arr;
  }

  valueOf() {
    let value = this.array.reduce((a, i) => a + i, 0);
    return value;
  }

  toString() {
    let string = this.array.toString();
    string = `[${string}]`;
    return string;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
console.log(obj1.valueOf());
const obj2 = new ArrayWrapper([2, 3]);
console.log(obj1.toString());
console.log(String(obj1));

console.log(obj1 + obj2);

"use strict";
/*
2618. Check if Object Instance of Class

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

 

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.
Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
*/
//! Solution 1: iterating through prototype chain
/*
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  let currProto = Object.getPrototypeOf(obj);

  while (currProto !== null) {
    if (currProto === classFunction.prototype) {
      return true;
    }
    currProto = Object.getPrototypeOf(currProto);
  }

  return false;
}
*/
//! Solution 2: Built-in instanceof method
function checkIfInstanceOf(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== "function")
        return false;
    let inputObj = obj;
    if (typeof obj !== "object") {
        inputObj = Object(obj);
    }
    return inputObj instanceof classFunction;
}
//! Solution 3: Iterating through prototype chain with a generator function
/*
function* prototypeGenerator(obj: any): Generator<any, void, unknown> {
  let currProto = Object.getPrototypeOf(obj);
  while (currProto !== null) {
    yield currProto;
    currProto = Object.getPrototypeOf(currProto);
  }
}

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== "function")
    return false;

  for (const prototype of prototypeGenerator(obj)) {
    if (prototype === (classFunction as Function).prototype) return true;
  }

  return false;
}
*/ 
//# sourceMappingURL=medium.2618.js.map
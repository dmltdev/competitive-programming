/*
2666. Allow One Function Call
https://leetcode.com/problems/allow-one-function-call/description/
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

*/

/* //! Solution 1: Boolean declaration, returning a function with ...args rest params that has an if..else.
const once = function(fn) {
    let hasBeenCalled = false;
    return function(...args){
        if (hasBeenCalled) {
            return undefined
        } else {
            hasBeenCalled = true;
            return fn(...args);
        }
    }
};
*/

//! Solution 2: Similar to solution 1 but does not have an "if (hasBeenCalled)" check because the function implicitly returns undefined in that case
const once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

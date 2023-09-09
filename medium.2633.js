/*
2633. Convert Object to JSON String

Given an object, return a valid JSON string of that object. You may assume the object only includes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

Please solve it without using the built-in JSON.stringify method.

 

Example 1:

Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().
Example 2:

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.
Example 3:

Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
Explanation:
Objects and arrays can include other objects and arrays.
Example 4:

Input: object = true
Output: true
Explanation:
Primitive types are valid inputs.
 

Constraints:

object includes strings, integers, booleans, arrays, objects, and null
1 <= JSON.stringify(object).length <= 105
maxNestingLevel <= 1000
all strings will only contain alphanumeric characters
*/

/**
 * @param {any} object
 * @return {string}
 */
const jsonStringify = function (object) {
  if (object === null) return "null";
  if (typeof object === "string") {
    return `"${object}"`;
  }
  if (Array.isArray(object)) {
    let result = "[";
    result += object.map(item => jsonStringify(item)).join(",");
    result += "]";
    return result;
  }
  if (typeof object === "object") {
    let result = "{";
    const keys = Object.keys(object);
    result += keys
      .map(key => `"${key}":${jsonStringify(object[key])}`)
      .join(",");
    result += "}";
    return result;
  }
  return String(object);
};

let test = { a: "str", b: -12, c: true, d: null };
console.log(jsonStringify(test));

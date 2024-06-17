/*
Write a function named categorizeProperties that receives an object as a parameter and returns an object with counts of each type of property value found within the given object. 

The types to count are: numbers, strings, arrays, objects, functions, booleans, undefined, nulls, NaNs, and symbols.

Constraints
- No recursive search: do not inspect nested objects or arrays for their properties.
- The input is always a valid object.
- Focus on basic data types including number, string, boolean, undefined, null, NaN, symbol, function, object, and array.
- Property Symbols: Include properties whose keys are symbols in the analysis.
- =The function should not use any built-in functions that simplify the task, like Object.values, Object.entries, or Object.keys.
*/

export function categorizeProperties(obj) {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    null: 0,
    NaN: 0,
    function: 0,
    object: 0,
    array: 0,
  };

  for (let property in obj) {
    const value = obj[property];
    if (value === null) {
      result.null++;
    } else if (Array.isArray(value)) {
      result.array++;
    } else if (typeof value === 'number') {
      if (isNaN(value)) {
        result.NaN++;
      } else {
        result.number++;
      }
    } else if (typeof value === 'string') {
      result.string++;
    } else if (typeof value === 'boolean') {
      result.boolean++;
    } else if (typeof value === 'undefined') {
      result.undefined++;
    } else if (typeof value === 'function') {
      result.function++;
    } else if (typeof value === 'object') {
      result.object++;
    }
  }

  return result;
}

// tests
const testObj = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'hiking'],
  isActive: true,
  greet: function () {
    console.log('Hello!');
  },
  details: { city: 'Wonderland' },
  score: null,
  level: undefined,
};

console.log(categorizeProperties(testObj));
//
// {
//     number: 1,
//     boolean: 1,
//     undefined: 1,
//     null: 1,
//     NaN: 0,
//     function: 1,
//     object: 1,
//     array: 1,
//     string: 1
// }

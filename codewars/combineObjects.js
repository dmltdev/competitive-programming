// Variant 1 uses "for" loop with iterable "i" value.
/*
const combine = (...objects) => {
    let resultObject = {};
    
    for (let i = 0; i < objects.length; i++) {
        const currentObj = objects[i];
        
        for (let key in currentObj) {
            if (currentObj.hasOwnProperty(key)) {
                const value = currentObj[key];
                resultObject[key] = (resultObject[key] || 0) + value;
            }
        }
    }
    
    return resultObject;
};
*/

// Variant 2 Utilizes in-built arguments object and for..in loop
/*
function combine() {
    var obj = {}
    
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
        }
    }
    
    return obj;
}
*/

// Variant 3 Uses an array.reduce method
/*
const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
    return a;
}, {});
*/

// Variant 4 The same as variant 3 but with better naming
const combine = (...objects) =>
  objects.reduce((accumulator, currentObject) => {
    for (const key in currentObject) {
      accumulator[key] =
        key in accumulator
          ? accumulator[key] + currentObject[key]
          : currentObject[key];
    }
    return accumulator;
  }, {});

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }

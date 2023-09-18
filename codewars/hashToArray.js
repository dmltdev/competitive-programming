"use strict";
const convertHashToArray = (hash) => {
    let arr = [];
    let keys = Object.keys(hash).sort();
    for (let key of keys) {
        let pair = [key, hash[key]];
        arr.push(pair);
    }
    return arr;
};
console.log(convertHashToArray({ name: "Jeremy", age: 24 }));
//# sourceMappingURL=hashToArray.js.map
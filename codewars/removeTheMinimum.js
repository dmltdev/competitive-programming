"use strict";
function removeSmallest(numbers) {
    let res = numbers.map(Number);
    let smallest = Math.min.apply(Math, res);
    let indexOfSmallest = res.indexOf(smallest);
    res.splice(indexOfSmallest, 1);
    return res;
}
// More concise version
function removeSmallest2(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
let nums = [1, 2, 3, 4, 5];
let minNum = Math.min(...nums);
console.log(minNum);
//# sourceMappingURL=removeTheMinimum.js.map
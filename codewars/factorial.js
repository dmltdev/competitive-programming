export const factorial = (n) => {
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
//# sourceMappingURL=factorial.js.map
type ReturnObj = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};
declare function createCounter(init: number): ReturnObj;
declare let counter: ReturnObj;

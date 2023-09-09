"use strict";
function createCounter(init) {
    let num = init;
    return {
        increment: () => ++num,
        decrement: () => --num,
        reset: () => (num = init),
    };
}
let counter = createCounter(5); //?
counter.increment(); //?
counter.reset(); //?
counter.decrement(); //?
//# sourceMappingURL=counter2.js.map
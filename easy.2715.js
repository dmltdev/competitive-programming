/* 

2715. Execute Cancellable Function With Delay

Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.

*/

const cancellable = function (fn, args, t) {
  const timeout = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelFn = () => clearTimeout(timeout);

  return cancelFn;
};

// !Test

let fn1 = (x) => x * 5;

console.log(cancellable(fn1, [5], 1000));

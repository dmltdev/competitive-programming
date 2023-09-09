/*
2725. Interval Cancellation

https://leetcode.com/problems/interval-cancellation/description/

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. 
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called. 
*/

const cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);
  let cancelFn = () => clearInterval(timer);
  return cancelFn;
};

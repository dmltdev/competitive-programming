/*
https://leetcode.com/problems/sleep/

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
*/

async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t);
});

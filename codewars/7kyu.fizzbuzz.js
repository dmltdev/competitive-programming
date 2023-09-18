// Regular FizzBuzz

function fizzbuzz(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i);
    }
  }
  return res;
}

console.log(fizzbuzz(15));

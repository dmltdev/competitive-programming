/*
7 kyu
Fibonacci's FizzBuzz

Instructions
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1]
Input:

fibsFizzBuzz(20)
Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
*/

//! Initial solution
/*
const fibsFizzBuzz = function(n) {
    let n1 = 0, n2 = 1, nextValue, fibArray = [], result = [];
    for (let i = 0; i < n; i++) {
        nextValue = n1 + n2;
        n1 = n2;
        fibArray.push(n1);
        n2 = nextValue;
    }
    for (let i = 0; i < fibArray.length; i++) {
        if (fibArray[i] % 3 === 0 && fibArray[i] % 5 === 0) {
            result.push('FizzBuzz');
        } else if (fibArray[i] % 3 === 0) {
            result.push('Fizz');
        } else if (fibArray[i] % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(fibArray[i]);
        }
    }
    return result;
}*/

//! Simpler solution using destructuring assignment and ternary operators
function fibsFizzBuzz(n) {
  let res = [],
    [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
    res.push(
      a % 15 === 0
        ? "FizzBuzz"
        : a % 3 === 0
        ? "Fizz"
        : a % 5 === 0
        ? "Buzz"
        : a,
    );
  }
  return res;
}

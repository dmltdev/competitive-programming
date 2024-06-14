/*
Write a function named everyNPositions that receives 2 parameters:

    a string - message
    a number - step

and returns a new string composed of all characters from message that are on positions divisible by step.
Example 1
Input

message
=

    "Which framework should I choose?"

step
=

    6

Output

    "Wfoo e"

Explanation

Our message has 32 characters. The characters on positions 0, 6, 12, 18, 24 and 30 make up the result Wfoo e.
*/

function everyNPositions(message, step) {
  let resultStr = '';
  
  for (let i = 0; i < message.length; i++) {
    if (i % step === 0) resultStr += message[i]
  }

  return resultStr;
}

console.log(everyNPositions("Which framework should I choose?", 6));
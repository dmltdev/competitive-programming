/*
Categorize New Member
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

*/

//! My first solution using destructuring assignment and for loop
/*
function openOrSenior(data){
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let [age, handicap] = data[i];
        if (age >= 55 && handicap > 7) {
            result.push('Senior');
        }
        if (age < 55 || handicap <= 7) {
            result.push('Open');
        }
    }
    return result;
}
*/

//! Shorter solution using destructing assignment, array.map and ternary operator
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open",
  );
}

//!Tests

let data1 = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];
openOrSenior(data1);

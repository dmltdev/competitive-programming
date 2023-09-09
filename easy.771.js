/*
771. Jewels and Stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// !Initial solution using for loop and array.filter
/*
const numJewelsInStones = function(jewels, stones) {
    let res = [];
    for (let i = 0; i < jewels.length; i++)  {
        res.push(stones.split('').filter(element => element === jewels[i]))
    }
    return res.join('').replace(/,/g, '').length;
};
*/

//! Using hash map
/*
const numJewelsInStones = function(jewels,stones) {
    const map = {};
    for (const stone of stones) {
        map[stone] = (map[stone] || 0 ) + 1;
    }

    let counter = 0;
    for (const jewel of jewels) {
        counter += map[jewel] || 0;
    }

    return counter;
}
*/

//! Hash map with a Map() object
const numJewelsInStones = function (jewels, stones) {
  const hashmap = new Map();
  let counter = 0;

  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i];
    hashmap.set(jewel, i);
  }

  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    if (hashmap.has(stone)) counter++;
  }

  return counter;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));

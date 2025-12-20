/*
1165. Single-Row Keyboard

There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

 

Example 1:

Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
Example 2:

Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73
 

Constraints:

keyboard.length == 26
keyboard contains each English lowercase letter exactly once in some order.
1 <= word.length <= 104
word[i] is an English lowercase letter.
*/

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

//! Using for loop and two pointers
const calculateTime = function (keyboard, word) {
  let res = 0,
    previousIndex = 0,
    currentIndex = 0;
  for (let i = 0; i < word.length; i++) {
    previousIndex = currentIndex;
    currentIndex = keyboard.indexOf(word[i]);
    res += Math.abs(currentIndex - previousIndex);
  }
  return res;
};

//! Using spread operator and array.prototype.reduce() method.
/*
const calculateTime = (keyboard, word, position = 0) =>
	[...word].reduce((a, i) => {
		const current = keyboard.indexOf(i);
		a += Math.abs(current - position);
		position = current;
		return a;
	}, 0);
*/

//! Hashmap solution
/*
const calculateTime = (keyboard, word) => {
	let map = new Map();
	for (let i = 0; i < keyboard.length; i++) {
		map.set(keyboard[i], i);
	}

	let arr = [];
	for (let i = 0; i < word.length; i++) {
		if (map.has(word[i])) {
			arr.push(map.get(word[i]));
		}
	}

	let res = [];
	for (let i = 0; i < arr.length - 1; i++) {
		res.push(Math.abs(arr[i] - arr[i + 1]));
	}

	res.unshift(Math.abs(0 - arr[0]));

	let total = 0;
	for (let i = 0; i < res.length; i++) {
		total += res[i];
	}

	return total;
};
*/

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")); //?

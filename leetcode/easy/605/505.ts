/* 
605. Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  flowerbed.forEach((_, i) => {
    const prev = i - 1;
    const next = i + 1;

    if (!flowerbed[prev] && !flowerbed[i] && !flowerbed[next]) {
      count++;
      flowerbed[i] = 1;
    }
  });

  return count >= n;
}

canPlaceFlowers([1, 0, 0, 0, 1], 1); //?

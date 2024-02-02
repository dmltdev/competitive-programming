/* 
1291. Sequential Digits

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
 

Constraints:

10 <= low <= high <= 10^9
*/

function sequentialDigits(low: number, high: number): number[] {
  const result: number[] = [];

  for (let start = 1; start <= 9; start++) {
    let num = start;

    for (let next = start + 1; next <= 9; next++) {
      num = num * 10 + next;
      if (num >= low && num <= high) {
        result.push(num);
      }
      if (num > high) break;
    }
  }

  result.sort((a, b) => a - b);

  return result;
}

//sequentialDigits(100, 300); //?
sequentialDigits(1000, 13000); //?

/* 
202. Happy Number

*/

function isHappy(n: number): boolean {
  const squares = {
    '0': 0,
    '1': 1,
    '2': 4,
    '3': 9,
    '4': 16,
    '5': 25,
    '6': 36,
    '7': 49,
    '8': 64,
    '9': 81,
  };

  const memo = new Map();
  let current = n;

  while (!memo.get(current)) {
    current = current
      .toString()
      .split('')
      .reduce((acc, i) => {
        acc += squares[i];
        return acc;
      }, 0);

    if (current === 1) return true;
    
    if (!memo.has(current)) {
      memo.set(current, false);
    } else return false;
  }

  return false;
}

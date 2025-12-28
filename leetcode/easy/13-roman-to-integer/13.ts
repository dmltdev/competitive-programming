// Method 1: Basic Iteration

// const symbols = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// function romanToInt(s: string): number {
//   let value = 0;

//   for (let i = 0; i < s.length; i++) {
//     const [roman, int] = [s[i], symbols[s[i]]];
//     const [nextRoman, nextInt] = [s[i + 1], symbols[s[i + 1]]];

//     if (int < nextInt) {
//       value -= int;
//     } else {
//       value += int;
//     }
//   }

//   return value;
// }


function romanToInt(s: string): number {
  const symbols = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let result = symbols[s[s.length - 1]];
  
  for (let i = s.length - 2; i >= 0; i--) {
      if (symbols[s[i]] < symbols[s[i + 1]]) {
          result -= symbols[s[i]];
      } else {
          result += symbols[s[i]];
      }
  }
  
  return result;
}
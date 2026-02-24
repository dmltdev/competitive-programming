/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"

 Write the code that will take a string and make this conversion given a number of rows:

 string convert(string s, int numRows);


 Example 1:

 Input: s = "PAYPALISHIRING", numRows = 3
 Output: "PAHNAPLSIIGYIR"
 Example 2:

 Input: s = "PAYPALISHIRING", numRows = 4
 Output: "PINALSIGYAHRPI"
 Explanation:
 P     I    N
 A   L S  I G
 Y A   H R
 P     I
 Example 3:

 Input: s = "A", numRows = 1
 Output: "A"
 */

function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows: string[] = new Array(numRows).fill("");
  let currentRow = 0;
  let direction = 1;

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0) direction = 1;
    else if (currentRow === numRows - 1) direction = -1;

    currentRow += direction;
  }

  return rows.join("");
}

const test1 = convert("PAYPALISHIRING", 3);
console.log(test1); // Output: "PAHNAPLSIIGYIR"

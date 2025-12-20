// Pascal's triangle daily training

const generate = function (numRows) {
  let triangle = [];
  if (numRows === 0) return triangle;

  triangle.push([1]);
  
  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};

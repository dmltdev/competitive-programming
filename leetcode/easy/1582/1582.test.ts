import numSpecial from "./easy.1582.js";

describe("numSpecial [easy, 1582]", () => {
  test("it should return the correct number of special positions in a binary matrix", () => {
    const matrix1: number[][] = [
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ];
    expect(numSpecial(matrix1)).toEqual(1);

    const matrix2: number[][] = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    expect(numSpecial(matrix2)).toEqual(3);

    const matrix3: number[][] = [
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ];
    expect(numSpecial(matrix3)).toEqual(2);
  });

  test("it should return 0 when there are no special positions in a matrix", () => {
    const matrix: number[][] = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];

    expect(numSpecial(matrix)).toEqual(0);
  });
});

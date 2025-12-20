import validMountainArray from "./easy.941.js";

describe("Valid Mountain Array", () => {
  it("Negative cases", () => {
    expect(validMountainArray([3, 5, 5])).toBe(false);
    expect(validMountainArray([3, 2, 1])).toBe(false);
    expect(validMountainArray([])).toBe(false);
  });

  it("Positive cases", () => {
    expect(validMountainArray([0, 1, 2, 3, 4, 3, 2, 1, 0])).toBe(true);
    expect(validMountainArray([3, 5, 2])).toBe(true);
  });
});

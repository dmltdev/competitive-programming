export function numberOfBeams(bank: string[]): number {
  let beams: number = 0;
  let prev: number = 0;

  for (const floor of bank) {
    const curr = floor.replaceAll("0", "").length;
    beams += prev * curr;
    prev = curr || prev;
  }

  return beams;
}

const a = numberOfBeams(["011001", "000000", "010100", "001000"]);
console.log(a);

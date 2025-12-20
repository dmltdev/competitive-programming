export function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set(jewels);
  let counter = 0;

  for (const stone of stones) {
    if (set.has(stone)) counter++;
  }

  return counter;
}

export function finalValueAfterOperations(operations: string[]): number {
  let value: number = 0;

  for (const op of operations) {
    value += op.includes("+") ? 1 : -1;
  }

  return value;
}

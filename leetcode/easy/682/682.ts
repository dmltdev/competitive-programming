function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (const op of operations) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      const lastScore = stack[stack.length - 1];
      stack.push(lastScore * 2);
    } else if (op === "+") {
      const lastScore = stack[stack.length - 1];
      const secondLastScore = stack[stack.length - 2];
      stack.push(lastScore + secondLastScore);
    } else {
      stack.push(parseInt(op));
    }
  }

  let sum = 0;
  for (const score of stack) {
    sum += score;
  }
  return sum;
}

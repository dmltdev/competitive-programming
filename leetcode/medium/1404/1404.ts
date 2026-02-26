function numSteps(s: string) {
  const bits = s.split("").map(Number);
  const n = bits.length;

  let steps = 0;
  let carry = 0;

  // iterate over all bits from right to left, excluding the leading 1
  for (let i = n - 1; i >= 1; i--) {
    const current = bits[i] + carry;

    if (current === 0) {
      // even -> divide by 2, no carry propagated
      steps += 1;
      carry = 0;
    } else if (current === 1) {
      // odd -> add 1 (generate carry), then divide by 2
      steps += 2;
      carry = 1;
    } else {
      // current === 2 -> bit=1 and carry=1, result is even (10 in binary)
      // divide by 2, but carry continues
      steps += 1;
      carry = 1;
    }
  }

  // if carry reaches the leading bit, it becomes '10'
  // needing one more division
  if (carry === 1) {
    steps += 1;
  }

  return steps;
}

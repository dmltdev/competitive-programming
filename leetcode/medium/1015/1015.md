# Solution Approach

The key insight is to avoid building the actual repunit numbers (1, 11, 111, 1111...) since they can become extremely large. Instead, we leverage modular arithmetic to efficiently track only the remainder when each repunit is divided by k.

## Algorithm Overview

**Early Termination Check**: Numbers divisible by 2 or 5 cannot have repunit divisors, so we immediately return -1 for such cases.

**Iterative Remainder Calculation**: We simulate building repunits digit by digit:

- Start with remainder = 0
- For each new digit '1', update: `remainder = (remainder × 10 + 1) % k`
- This formula represents appending a '1' to our current number

**Termination Conditions**:

- **Success**: When remainder becomes 0, we've found a repunit divisible by k
- **Cycle Detection**: Since there are only k possible remainders (0 to k-1), if we iterate more than k times without finding 0, we're guaranteed to be in a cycle

The beauty of this approach is that we never need to store or manipulate the actual large numbers - we only track their remainders, making the solution both memory and time efficient.

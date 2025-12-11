# String to integer (atoi)

## Solution 2

To efficiently check if a character is a digit, we can use ASCII code points. In ASCII, digits '0' through '9' are consecutive values 48-57.

By checking `charCodeAt(i) > 47 && charCodeAt(i) < 58`, we verify the character falls in this range (48-57), which is significantly faster than regex `/[0-9]/.test(char)` or type coercion `!isNaN(+char)`.

```typescript
function myAtoi(s: string): number {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  let i = 0;
  while (s[i] === " ") i++;

  const sign = s[i] === "-" ? -1 : 1;
  if (s[i] === "+" || s[i] === "-") i++;

  let number = 0;
  while (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
    number = number * 10 + Number(s[i]);
    i++;
  }

  const answer = sign * number;
  return sign > 0 ? Math.min(MAX, answer) : Math.max(MIN, answer);
}
```

- Skip leading whitespace
- Determine sign
- Process consecutive digit characters by checking their ASCII codes
- Clamp to 32-bit range => Use Math.min and Math.max to stay within bounds

### The `charCodeAt` method

`charCodeAt` returns the ASCII/Unicode code point of a character.
In ASCII, digits 0-9 are consecutive values 48-57.
So, using `while (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58)` checks if this is a digit character. It's significantly faster than Regex `/[0-9]/.test(Char)` or type coercion `!isNaN(+char)`.

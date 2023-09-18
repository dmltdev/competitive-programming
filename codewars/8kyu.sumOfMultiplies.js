function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";

  let res = 0;
  for (let i = n; i < m; i += n) {
    res += i;
  }
  return res;
}

console.log(sumMul(2, 9));

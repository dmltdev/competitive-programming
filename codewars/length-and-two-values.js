/*
function alternate(n, firstValue, secondValue){
  if (n === 0) {
    return [];
  } 
  let arr = [firstValue, secondValue];
  if (n === 1) {
    arr.pop();
    return arr;
  }
  while (arr.length < n) {
    arr.push(firstValue);
    if (n % 2 === 1 && n === arr.length) {
      break;
    }
    arr.push(secondValue);
 }
 return arr;
}
*/

/* More concise and efficient solution
  function alternate(n, firstValue, secondValue){
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
}
*/

// Recursive solution:
const alternate = (n, a, b) => (n ? [a, ...alternate(n - 1, b, a)] : []);

console.log(alternate(1, true, false));
console.log(alternate(1, "ttvmq", "xuvrul"));

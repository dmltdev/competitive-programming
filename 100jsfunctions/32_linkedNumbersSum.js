//* iterative
// function linkedNumbersSum(node) {
//   let sum = 0;
//   let head = node;

//   while (head) {
//     sum += head.value
//     head = head.next
//   }

//   return sum;
// }

//* tail recursion
function linkedNumbersSum(node, sum = 0) {
  if (!node) return sum;
  return linkedNumbersSum(node.next, sum + node.value);
}

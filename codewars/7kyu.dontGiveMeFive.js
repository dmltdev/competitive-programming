// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  let res = 0;
  for (let i = start; i <= end; i++) {
    if (!Math.abs(i).toString().includes("5")) {
      res++;
    }
  }
  return res;
}

console.log(dontGiveMeFive(4, 26));

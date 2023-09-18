const pillars = (numPill: number, dist: number, width: number) =>
  numPill === 1 ? 0 : (numPill - 2) * width + 100 * dist * (numPill - 1);

//console.log(pillars(1, 10, 10));
//console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));

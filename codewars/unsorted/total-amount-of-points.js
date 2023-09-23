function points(games) {
  let score = 0;
  for (let i = 0; i < games.length; i++) {
    const [n1, n2] = games[i].split(":");
    if (n1 > n2) {
      score += 3;
    }
    if (n1 < n2) {
      score += 0;
    }
    if (n1 === n2) {
      score += 1;
    }
  }
  return score;
}

const pair1 = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

console.log(points(pair1));

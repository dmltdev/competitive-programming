class DSU {
  parent: number[];

  constructor(public size: number) {
    this.parent = Array.from({ length: size }).map((_, i) => i);
  }

  join(u: number, v: number) {
    this.parent[this.find(v)] = this.find(u);
  }

  find(x: number): number {
    return this.parent[x] === x ? x : (this.parent[x] = this.find(this.parent[x]));
  }
}
function processQueries(c: number, connections: number[][], queries: number[][]): number[] {
  const dsu = new DSU(c + 1);

  connections.forEach(([u, v]) => {
    dsu.join(u, v);
  });

  const online = new Array<boolean>(c + 1).fill(true);
  const offlineCounts = new Array<number>(c + 1).fill(0);
  const minimumOnlineStations = new Map<number, number>();

  for (const [op, x] of queries) {
    if (op === 2) {
      online[x] = false;
      offlineCounts[x] += 1;
    }
  }

  for (let i = 1; i <= c; i++) {
    const root = dsu.find(i);
    if (!minimumOnlineStations.has(root)) {
      minimumOnlineStations.set(root, -1);
    }

    const station = minimumOnlineStations.get(root);

    if (online[i] === true) {
      if (station === -1 || (typeof station === "number" && station > i)) {
        minimumOnlineStations.set(root, i);
      }
    }
  }

  const ans: number[] = [];

  for (const [op, x] of queries.reverse()) {
    const root = dsu.find(x);
    const station = minimumOnlineStations.get(root);

    if (op === 1) {
      if (online[x]) {
        ans.push(x);
      } else {
        ans.push(station === -1 ? -1 : station!);
      }
    }

    if (op === 2) {
      if (offlineCounts[x] > 1) {
        offlineCounts[x] -= 1;
      } else {
        online[x] = true;
        if (station === -1 || (typeof station === "number" && station > x)) {
          minimumOnlineStations.set(root, x);
        }
      }
    }
  }

  return ans.reverse();
}

console.log("Example 1:");
const c1 = 5;
const connections1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
const queries1 = [
  [1, 3],
  [2, 1],
  [1, 1],
  [2, 2],
  [1, 2],
];
const result1 = processQueries(c1, connections1, queries1);
console.log("Result:", result1);
console.log("Expected: [3,2,3]");
console.log("Match:", JSON.stringify(result1) === JSON.stringify([3, 2, 3]));

console.log("\nExample 2:");
const c2 = 3;
const connections2: number[][] = [];
const queries2 = [
  [1, 1],
  [2, 1],
  [1, 1],
];
const result2 = processQueries(c2, connections2, queries2);
console.log("Result:", result2);
console.log("Expected: [1,-1]");
console.log("Match:", JSON.stringify(result2) === JSON.stringify([1, -1]));

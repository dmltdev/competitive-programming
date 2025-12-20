# 3607. Power Grid Maintenance

[Problem](https://leetcode.com/problems/power-grid-maintenance/)

## Problem Statement

You are given `c` power stations (1 to c) interconnected via `n` bidirectional cables. Stations form power grids through direct or indirect connections.

Handle two types of queries:

- `[1, x]`: Maintenance check for station x
  - If x is online: x resolves the check
  - If x is offline: smallest ID online station in same grid resolves it
  - If no online stations in grid: return -1
- `[2, x]`: Station x goes offline

Return results for all type 1 queries in order.

## Constraints

- 1 ≤ c ≤ 10⁵
- 0 ≤ n ≤ min(10⁵, c × (c-1) / 2)
- 1 ≤ queries.length ≤ 2 × 10⁵

## Key Insights

### Problem Decomposition

This problem has two independent sub-problems:

1. **Connected Components**: Which stations belong to the same power grid
2. **Dynamic Minimum Tracking**: Maintain minimum online station ID per component

### The Reverse Processing Trick

**Core Insight**: Instead of handling "stations going offline" (complex), process queries in reverse and handle "stations coming online" (simple).

- **Forward processing**: Deletions are hard to handle efficiently
- **Reverse processing**: Deletions become additions, which are easier to manage

## Algorithm

### Step 1: Build Connected Components

```ts
const dsu = new DSU(c + 1);
connections.forEach(([u, v]) => {
  dsu.join(u, v); // Union-Find to group connected stations
});
```

### Step 2: Determine Final State

```ts
// Mark all stations that will go offline
for (const [op, x] of queries) {
  if (op === 2) {
    online[x] = false;
    offlineCounts[x] += 1; // Count offline operations
  }
}
```

### Step 3: Initialize Minimum Stations

```ts
// For each component, find minimum online station
for (let i = 1; i <= c; i++) {
  const root = dsu.find(i);
  if (online[i] && (station === -1 || station > i)) {
    minimumOnlineStations.set(root, i);
  }
}
```

### Step 4: Reverse Processing

```ts
for (const [op, x] of queries.reverse()) {
  if (op === 1) {
    // Answer maintenance query
    if (online[x]) {
      ans.push(x); // Station handles its own maintenance
    } else {
      ans.push(station === -1 ? -1 : station); // Delegate to minimum
    }
  }

  if (op === 2) {
    // "Bring station online" (reverse of going offline)
    if (offlineCounts[x] === 1) {
      online[x] = true;
      // Update minimum for this component
    }
  }
}
```

## Implementation

```ts
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

  // Build connected components
  connections.forEach(([u, v]) => {
    dsu.join(u, v);
  });

  const online = new Array<boolean>(c + 1).fill(true);
  const offlineCounts = new Array<number>(c + 1).fill(0);
  const minimumOnlineStations = new Map<number, number>();

  // Determine final offline state
  for (const [op, x] of queries) {
    if (op === 2) {
      online[x] = false;
      offlineCounts[x] += 1;
    }
  }

  // Initialize minimum stations per component
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

  // Process queries in reverse
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
```

## Example Walkthrough

**Input**: `c = 5, connections = [[1,2],[2,3],[3,4],[4,5]], queries = [[1,3],[2,1],[1,1],[2,2],[1,2]]`

### Initial State

- All stations 1-5 connected in one component
- All stations online

### Forward Pass (Offline Counting)

- Station 1 goes offline: `offlineCounts[1] = 1`
- Station 2 goes offline: `offlineCounts[2] = 1`
- Final online stations: {3, 4, 5}
- Minimum online station: 3

### Reverse Processing

1. `[1,2]` → Station 2 offline, minimum = 3 → **Answer: 3**
2. `[2,2]` → Bring station 2 online, new minimum = 2
3. `[1,1]` → Station 1 offline, minimum = 2 → **Answer: 2**
4. `[2,1]` → Bring station 1 online, new minimum = 1
5. `[1,3]` → Station 3 online → **Answer: 3**

**Output**: `[3, 2, 3]` ✓

## Complexity

- **Time Complexity**: O((n + q) × α(n))
  - n: number of stations
  - q: number of queries
  - α(n): inverse Ackermann function (nearly constant)
- **Space Complexity**: O(n)
  - For DSU, online status, and minimum tracking

## When to Use This Pattern

**Reverse Processing** is powerful for:

- **Dynamic connectivity** with deletions
- **Offline queries** (all operations known in advance)
- **Maintaining aggregates** (min/max/sum) during deletions
- **Graph problems** with edge/node removals

**Template**:

1. Use Union-Find for connectivity
2. Process deletions to determine final state
3. Reverse operations (deletions → additions)
4. Maintain aggregates during reverse processing
5. Answer queries during traversal

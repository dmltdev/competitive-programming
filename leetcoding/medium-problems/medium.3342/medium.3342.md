## Approach

- Use Dijkstra's algorithm (priority queue/min-heap) to always expand the cell with the smallest current time.
- For each cell, track the minimum time to reach it.
- For each move, determine if it's an odd or even move (to decide if it takes 1 or 2 seconds).
- When moving to a neighbor, calculate the earliest possible arrival time, considering both the move duration and the room's open time.
- Only update and push to the heap if the new time is better than the previously recorded time for that cell.

---

## Solution

```ts
interface MoveStep {
  x: number;
  y: number;
  time: number;
  steps: number;
}

class Heap<T = number> {
  private heap: T[];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = [];
    this.comparator = comparator;
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  push(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop(): T | undefined {
    if (this.size() === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop()!;
    if (this.size() > 0) {
      this.heap[0] = bottom;
      this.bubbleDown();
    }
    return top;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  private bubbleUp(): void {
    let index = this.size() - 1;
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (this.comparator(element, parent) >= 0) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  private bubbleDown(): void {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swapIndex = -1;

      if (leftIndex < length) {
        if (this.comparator(this.heap[leftIndex], element) < 0) {
          swapIndex = leftIndex;
        }
      }
      if (rightIndex < length) {
        if (
          this.comparator(this.heap[rightIndex], element) < 0 &&
          this.comparator(this.heap[rightIndex], this.heap[leftIndex]) < 0
        ) {
          swapIndex = rightIndex;
        }
      }
      if (swapIndex === -1) break;
      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }
    this.heap[index] = element;
  }
}

function minTimeToReach(moveTime: number[][]): number {
  const minTime = Array.from({ length: moveTime.length }, () =>
    Array.from({ length: moveTime[0].length }, () => Infinity)
  );
  const heap = new Heap<MoveStep>((a, b) => a.time - b.time);
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  heap.push({ x: 0, y: 0, time: 0, steps: 0 });

  while (!heap.isEmpty()) {
    const { x, y, time, steps } = heap.pop()!;
    if (x === moveTime.length - 1 && y === moveTime[0].length - 1) {
      return time;
    }
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx < 0 ||
        nx >= moveTime.length ||
        ny < 0 ||
        ny >= moveTime[0].length
      ) {
        continue;
      }
      const newTime =
        steps & 1
          ? Math.max(time + 2, moveTime[nx][ny] + 2)
          : Math.max(time + 1, moveTime[nx][ny] + 1);
      if (minTime[nx][ny] > newTime) {
        minTime[nx][ny] = newTime;
        heap.push({
          x: nx,
          y: ny,
          time: newTime,
          steps: steps + 1,
        });
      }
    }
  }
  return minTime[moveTime.length - 1][moveTime[0].length - 1];
}
```

---

## Complexity

- **Time complexity:** \(O(n \cdot m \cdot \log(n \cdot m))\)  
  Each cell can be visited multiple times, but the heap ensures we process the smallest time first. The heap operations are logarithmic in the number of cells.
- **Space complexity:** \(O(n \cdot m)\)  
  For the `minTime` array and the heap.

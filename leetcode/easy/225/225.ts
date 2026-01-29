class MyStack {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  push(item: number): void {
    this.queue.push(item);
    // rotate all elements except the newly added one
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number | undefined {
    return this.queue.shift();
  }

  top(): number | undefined {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

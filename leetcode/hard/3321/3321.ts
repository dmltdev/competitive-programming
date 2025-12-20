class RBNode {
  k: number;
  v: number;
  c: "r" | "b";
  l: RBNode;
  r: RBNode;
  p: RBNode;
  constructor(k: number, v: number, nil: RBNode) {
    this.k = k;
    this.v = v;
    this.c = "r";
    this.l = this.r = this.p = nil;
  }
}

class RBTree {
  nil: RBNode;
  root: RBNode;
  constructor() {
    this.nil = new RBNode(0, 0, null as any);
    this.nil.c = "b";
    this.nil.l = this.nil.r = this.nil.p = this.nil;
    this.root = this.nil;
  }
  static cmpKV(a: [number, number], b: [number, number]) {
    return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
  }
  insert(k: number, v: number): boolean {
    const z = new RBNode(k, v, this.nil);
    let y = this.nil,
      x = this.root;
    while (x !== this.nil) {
      y = x;
      const c = RBTree.cmpKV([z.k, z.v], [x.k, x.v]);
      if (c === 0) return false;
      x = c < 0 ? x.l : x.r;
    }
    z.p = y;
    if (y === this.nil) this.root = z;
    else if (RBTree.cmpKV([z.k, z.v], [y.k, y.v]) < 0) y.l = z;
    else y.r = z;
    z.l = z.r = this.nil;
    z.c = "r";
    this.fixIns(z);
    return true;
  }
  delete(k: number, v: number): boolean {
    let z = this.root;
    while (z !== this.nil) {
      const c = RBTree.cmpKV([k, v], [z.k, z.v]);
      if (c === 0) break;
      z = c < 0 ? z.l : z.r;
    }
    if (z === this.nil) return false;
    let y = z,
      yc = y.c,
      x: RBNode;
    if (z.l === this.nil) {
      x = z.r;
      this.trans(z, z.r);
    } else if (z.r === this.nil) {
      x = z.l;
      this.trans(z, z.l);
    } else {
      y = this.min(z.r);
      yc = y.c;
      x = y.r;
      if (y.p === z) x.p = y;
      else {
        this.trans(y, y.r);
        y.r = z.r;
        y.r.p = y;
      }
      this.trans(z, y);
      y.l = z.l;
      y.l.p = y;
      y.c = z.c;
    }
    if (yc === "b") this.fixDel(x);
    return true;
  }
  min(n: RBNode) {
    while (n.l !== this.nil) n = n.l;
    return n;
  }
  max(n: RBNode) {
    while (n.r !== this.nil) n = n.r;
    return n;
  }
  trans(u: RBNode, v: RBNode) {
    if (u.p === this.nil) this.root = v;
    else if (u === u.p.l) u.p.l = v;
    else u.p.r = v;
    v.p = u.p;
  }
  fixIns(z: RBNode) {
    while (z.p.c === "r") {
      const gp = z.p.p;
      if (z.p === gp.l) {
        const y = gp.r;
        if (y.c === "r") {
          z.p.c = y.c = "b";
          gp.c = "r";
          z = gp;
        } else {
          if (z === z.p.r) {
            z = z.p;
            this.left(z);
          }
          z.p.c = "b";
          gp.c = "r";
          this.right(gp);
        }
      } else {
        const y = gp.l;
        if (y.c === "r") {
          z.p.c = y.c = "b";
          gp.c = "r";
          z = gp;
        } else {
          if (z === z.p.l) {
            z = z.p;
            this.right(z);
          }
          z.p.c = "b";
          gp.c = "r";
          this.left(gp);
        }
      }
    }
    this.root.c = "b";
  }
  fixDel(x: RBNode) {
    while (x !== this.root && x.c === "b") {
      if (x === x.p.l) {
        let w = x.p.r;
        if (w.c === "r") {
          w.c = "b";
          x.p.c = "r";
          this.left(x.p);
          w = x.p.r;
        }
        if (w.l.c === "b" && w.r.c === "b") {
          w.c = "r";
          x = x.p;
        } else {
          if (w.r.c === "b") {
            w.l.c = "b";
            w.c = "r";
            this.right(w);
            w = x.p.r;
          }
          w.c = x.p.c;
          x.p.c = "b";
          w.r.c = "b";
          this.left(x.p);
          x = this.root;
        }
      } else {
        let w = x.p.l;
        if (w.c === "r") {
          w.c = "b";
          x.p.c = "r";
          this.right(x.p);
          w = x.p.l;
        }
        if (w.r.c === "b" && w.l.c === "b") {
          w.c = "r";
          x = x.p;
        } else {
          if (w.l.c === "b") {
            w.r.c = "b";
            w.c = "r";
            this.left(w);
            w = x.p.l;
          }
          w.c = x.p.c;
          x.p.c = "b";
          w.l.c = "b";
          this.right(x.p);
          x = this.root;
        }
      }
    }
    x.c = "b";
  }
  left(x: RBNode) {
    const y = x.r;
    x.r = y.l;
    if (y.l !== this.nil) y.l.p = x;
    y.p = x.p;
    if (x.p === this.nil) this.root = y;
    else if (x === x.p.l) x.p.l = y;
    else x.p.r = y;
    y.l = x;
    x.p = y;
  }
  right(x: RBNode) {
    const y = x.l;
    x.l = y.r;
    if (y.r !== this.nil) y.r.p = x;
    y.p = x.p;
    if (x.p === this.nil) this.root = y;
    else if (x === x.p.r) x.p.r = y;
    else x.p.l = y;
    y.r = x;
    x.p = y;
  }
}

class OrderedSet {
  t = new RBTree();
  size = 0;
  static cmp(a: [number, number], b: [number, number]) {
    return RBTree.cmpKV(a, b);
  }
  insert(k: number, v: number): boolean {
    const ok = this.t.insert(k, v);
    if (ok) this.size++;
    return ok;
  }
  delete(k: number, v: number): boolean {
    const ok = this.t.delete(k, v);
    if (ok) this.size--;
    return ok;
  }
  getMin(): [number, number] | null {
    if (!this.size) return null;
    const n = this.t.min(this.t.root);
    return [n.k, n.v];
  }
  getMax(): [number, number] | null {
    if (!this.size) return null;
    const n = this.t.max(this.t.root);
    return [n.k, n.v];
  }
}

function findXSum(nums: number[], k: number, x: number): number[] {
  const freq = new Map<number, number>();
  const top = new OrderedSet();
  const rest = new OrderedSet();
  let sum = 0,
    res: number[] = [];

  const rebalance = () => {
    while (top.size > x) {
      const m = top.getMin();
      if (!m) break;
      const [a, b] = m;
      top.delete(a, b);
      sum -= a * b;
      rest.insert(a, b);
    }
    while (top.size < x && rest.size) {
      const m = rest.getMax();
      if (!m) break;
      const [a, b] = m;
      rest.delete(a, b);
      top.insert(a, b);
      sum += a * b;
    }
    while (top.size && rest.size) {
      const minT = top.getMin()!,
        maxR = rest.getMax()!;
      if (OrderedSet.cmp(maxR, minT) > 0) {
        top.delete(minT[0], minT[1]);
        rest.delete(maxR[0], maxR[1]);
        sum -= minT[0] * minT[1];
        sum += maxR[0] * maxR[1];
        top.insert(maxR[0], maxR[1]);
        rest.insert(minT[0], minT[1]);
      } else break;
    }
  };

  const add = (n: number) => {
    const c = freq.get(n) ?? 0;
    if (c) {
      if (!rest.delete(n, c)) {
        if (top.delete(n, c)) sum -= n * c;
      }
    }
    freq.set(n, c + 1);
    rest.insert(n, c + 1);
    rebalance();
  };

  const remove = (n: number) => {
    const c = freq.get(n)!;
    if (!rest.delete(n, c)) {
      if (top.delete(n, c)) sum -= n * c;
    }
    if (c - 1 > 0) {
      freq.set(n, c - 1);
      rest.insert(n, c - 1);
    } else freq.delete(n);
    rebalance();
  };

  for (let i = 0; i < nums.length; i++) {
    add(nums[i]);
    if (i >= k) remove(nums[i - k]);
    if (i >= k - 1) res.push(sum);
  }
  return res;
}

console.log("Test 1:", findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2)); // Expected: [6,10,12]
console.log("Test 2:", findXSum([3, 8, 7, 8, 7, 5], 2, 2)); // Expected: [11,15,15,15,12]

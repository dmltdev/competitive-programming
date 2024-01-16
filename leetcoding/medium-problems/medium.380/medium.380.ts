/* 
380. Insert Delete GetRandom O(1)

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

 

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
 

Constraints:

-231 <= val <= 231 - 1
At most 2 * 105 calls will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.
*/

class RandomizedSet {
  private map: Map<number, number>;
  private values: number[];

  constructor() {
    this.map = new Map();
    this.values = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.map.set(val, this.values.length);
    this.values.push(val);

    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    const pos = this.map.get(val)!;

    if (pos !== this.values.length - 1) {
      const lastValue = this.values[this.values.length - 1];
      [this.values[pos], this.values[this.values.length - 1]] = [
        this.values[this.values.length - 1],
        this.values[pos],
      ];
      this.map.set(lastValue, pos);
    }

    this.map.delete(val);
    this.values.pop();

    return true;
  }

  getRandom(): number {
    return this.values[Math.floor(Math.random() * this.values.length)];
  }
}

const set = new RandomizedSet();
set.insert(1);
set.insert(2);
set.insert(3);
set.insert(4);
set.insert(5);
set.insert(6);
set.insert(7);
set.getRandom();
set.getRandom();
set.getRandom();
set.getRandom();
set.getRandom();
set.getRandom();
set.getRandom();

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

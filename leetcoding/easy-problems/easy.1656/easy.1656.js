/*
1656. Design an Ordered Stream


There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

OrderedStream(int n) Constructs the stream to take n values.
String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
*/

class OrderedStream {
  constructor(n) {
    this.pointer = 0;
    this.list = new Array(n);
  }

  insert(id, value) {
    let chunk = [];
    this.list[id - 1] = value;
    while (this.list[this.pointer]) {
      chunk.push(this.list[this.pointer]);
      this.pointer++;
    }
    return chunk;
  }
}

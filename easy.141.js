const hasCycle = function (head) {
  head.pos = 0;

  while (head.next) {
    head.pos++;
  }
};

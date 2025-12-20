# Hash map stores the nodes of the doubly linked list, allowing O(1) access time to any node when given its key.
class Node:
  def __init__(self, key, val):
    self.key, self.val = key, val
    self.prev = self.next = None

class LRUCache:
  def __init__(self, capacity: int): 
    self.cap = capacity
    self.cache = {}
    
    # Left = LRU, right = MRU
    self.left, self.right = Node(0, 0), Node(0, 0)
    self.left.next, self.right.prev = self.right, self.left
    
  # Removes LRU node
  def remove(self, node: Node) -> None:
    # [prev]⇿[node]⇿[nxt] => [prev]⇿[nxt]
    prev, nxt = node.prev, node.next
    prev.next, nxt.prev = nxt, prev
    
    
  # Inserts MRU node
  def insert(self, node: Node) -> None:
    # [LRU]⇿[...]⇿[MRU] => [LRU]⇿[...]⇿[prev MRU]⇿[new MRU]
    prev, nxt = self.right.prev, self.right
    prev.next = nxt.prev = node
    node.next, node.prev = nxt, prev
    
  # Returns the value of the key from the cache (hash map). 
  def get(self, key: int) -> int:
    if key in self.cache:
      # Removes the node from the left (LRU)
      self.remove(self.cache[key])
      # and puts it back in the right (MRU)
      self.insert(self.cache[key])
      return self.cache[key].val
    return -1
    
  # Adds MRU node to the list and cache
  def put(self, key: int, value: int) -> None: 
    # If the node is already in the list, removes it from LRU
    if key in self.cache:
      self.remove(self.cache[key])
    self.cache[key] = Node(key, value)
    self.insert(self.cache[key])
    
    # Remove the LRU node if capacity is exceeded
    if len(self.cache) > self.cap:
      lru = self.left.next
      # Remove from the linked list
      self.remove(lru)
      # Remove from cache
      del self.cache[lru.key]
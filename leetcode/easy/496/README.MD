# Next Greater Element I

## Problem Statement

Given two arrays `nums1` and `nums2` where `nums1` is a subset of `nums2`, find all the next greater elements for each element in `nums1` in `nums2`.

The next greater element of a number `x` in `nums1` is the first greater number to its right in `nums2`. If it doesn't exist, return -1 for this number.

**Constraints:**
- `1 <= nums1.length <= nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 10^4`
- All integers in `nums1` and `nums2` are unique
- All integers in `nums1` also appear in `nums2`

**Example 1:**
```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]

Explanation:
- For 4: no element to the right is greater → -1
- For 1: first greater element to the right is 3 → 3
- For 2: no element to the right is greater → -1
```

**Example 2:**
```
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]

Explanation:
- For 2: first greater element is 3 → 3
- For 4: no element to the right is greater → -1
```

## Pattern Recognition

**Problem Type:** Array, Stack, Monotonic Stack

**Key Observations:**
1. **Subset relationship:** nums1 ⊆ nums2 → precompute answers for all nums2 elements, then lookup
2. **"Next greater":** We need information about elements to the right
3. **First greater:** We only care about the closest greater element, not all greater elements
4. **Unique elements:** Each element appears once, so we can use a Map for O(1) lookup

**Why Monotonic Stack?**
- "Next greater/smaller element" problems are canonical monotonic stack applications
- We need to process elements while maintaining order information
- Stack allows us to eliminate useless candidates as we scan

## Intuition

### The Core Problem

For each element, we need to look to its right and find the first element that's larger. 

**Brute force thinking:**
"For each element, scan everything to its right until I find something bigger."

**Optimal thinking:**
"As I scan from right to left, I can maintain a list of 'candidates' for being the next greater element. When I see a new element, I can eliminate candidates that are now useless."

### Why Scan Right-to-Left?

When you're at position `i`, the next greater element is somewhere in positions `i+1` to `n-1`, where `n` is the length of `nums2`. You need future information. By scanning right-to-left:
- When you reach position `i`, you've already processed all positions to the right
- You've built up knowledge about what's "out there"
- You can make a decision immediately

### Why Maintain Decreasing Order?
```
Stack (bottom to top): [10, 7, 5, 3]
Current element: 6

The 3 and 5 are useless now because:
- They're smaller than 6
- They're to the right of 6
- For any future element to the left, if 6 isn't big enough, then 3 and 5 definitely won't be

So pop them. Keep 7 because 7 > 6.
```

The stack represents "layers" of potential answers. Each layer is a possible answer for some future element.

## Approach 1: Brute Force

### Algorithm

1. **Build lookup map:**
   - For each element in nums2
   - Scan right from its position
   - Find first element greater than current
   - Store in map: `element → next_greater`

2. **Answer queries:**
   - For each element in nums1
   - Look up its next greater element in the map

### Code
```typescript
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const greaters = new Map<number, number>();

  // Build the map for all nums2 elements
  for (let i = 0; i < nums2.length; i++) {
    let next = -1;

    // Scan right to find first greater element
    let j = i + 1;
    while (j < nums2.length) {
      if (nums2[j] > nums2[i]) {
        next = nums2[j];
        break;
      }
      j++;
    }

    greaters.set(nums2[i], next);
  }

  // Answer queries for nums1
  return nums1.map(num => greaters.get(num)!);
}
```

### Complexity

- **Time:** O(n²) where n = length of nums2
  - Outer loop: n iterations
  - Inner loop: up to n iterations per element
  - Query answering: O(k) where k = length of nums1
  - Total: O(n²)

- **Space:** O(n) for the map

### Why It's Inefficient
```
nums2 = [5, 4, 3, 2, 6]

For 5: scan [4,3,2,6] → 4 comparisons to find 6
For 4: scan [3,2,6] → 3 comparisons to find 6
For 3: scan [2,6] → 2 comparisons to find 6
For 2: scan [6] → 1 comparison to find 6

Total: 10 comparisons (redundant work)
```

We're re-scanning the same elements multiple times.

## Approach 2: Monotonic Decreasing Stack (Optimal)

### Algorithm

1. **Initialize:**
   - Empty stack
   - Empty map

2. **Scan nums2 from right to left:**
   - For current element:
     - Pop all stack elements ≤ current (they're useless)
     - Top of stack is next greater (or -1 if empty)
     - Store mapping: `current → next_greater`
     - Push current onto stack

3. **Answer queries:**
   - For each element in nums1, look up in map

### Code
```typescript
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreater = new Map<number, number>();
  const stack: number[] = [];
  
  // Scan nums2 from right to left
  for (let i = nums2.length - 1; i >= 0; i--) {
    const current = nums2[i];
    
    // Pop elements that are <= current
    // They can never be "next greater" for any future element
    while (stack.length > 0 && stack[stack.length - 1] <= current) {
      stack.pop();
    }
    
    // Top of stack is the next greater element (or -1 if stack is empty)
    nextGreater.set(current, stack.length > 0 ? stack[stack.length - 1] : -1);
    
    // Push current element as a candidate for future elements
    stack.push(current);
  }
  
  // Build result by looking up each nums1 element
  return nums1.map(num => nextGreater.get(num)!);
}
```

### Complexity

- **Time:** O(n + k)
  - Each element pushed once: O(n)
  - Each element popped at most once: O(n)
  - Total for processing nums2: O(n)
  - Query answering for nums1: O(k)
  - Overall: O(n + k)

- **Space:** O(n)
  - Stack: up to n elements
  - Map: n key-value pairs

### Detailed Example Trace
```
nums2 = [1, 3, 4, 2]
Scan right-to-left: [2, 4, 3, 1]
```

**Step 1: i=3, current=2**
```
Stack before: []
2 vs stack: stack is empty
Next greater for 2: -1
Push 2
Stack after: [2]
Map: {2: -1}
```

**Step 2: i=2, current=4**
```
Stack before: [2]
4 vs top(2): 2 <= 4, pop it
Stack after pop: []
Next greater for 4: -1
Push 4
Stack after: [4]
Map: {2: -1, 4: -1}
```

**Step 3: i=1, current=3**
```
Stack before: [4]
3 vs top(4): 4 > 3, keep it
Next greater for 3: 4
Push 3
Stack after: [4, 3]
Map: {2: -1, 4: -1, 3: 4}
```

**Step 4: i=0, current=1**
```
Stack before: [4, 3]
1 vs top(3): 3 > 1, keep it
Next greater for 1: 3
Push 1
Stack after: [4, 3, 1]
Map: {2: -1, 4: -1, 3: 4, 1: 3}
```

**Query nums1 = [4, 1, 2]:**
```
nextGreater.get(4) = -1
nextGreater.get(1) = 3
nextGreater.get(2) = -1
Result: [-1, 3, -1]
```

### Why Stack Is Decreasing

The stack maintains **decreasing order from bottom to top**:
```
Bottom → [10, 7, 5, 3] → Top
```

**Reason:** When we see a large element (e.g., 8), we pop all smaller elements (3, 5, 7). Only elements larger than 8 remain. This creates decreasing order naturally.

**Benefit:** The next greater element is always at the **top** of the stack (closest position to the right that's greater).

## Visual Mental Model

Think of the stack as "layers of candidates":
```
nums2 = [5, 4, 3, 2, 6]
Scan right-to-left:

After 6:   Stack = [6]
After 2:   Stack = [6, 2]      (2 is smaller than 6, keep both)
After 3:   Stack = [6, 3]      (3 > 2, pop 2; 3 < 6, keep 6)
After 4:   Stack = [6, 4]      (4 > 3, pop 3; 4 < 6, keep 6)
After 5:   Stack = [6, 5]      (5 > 4, pop 4; 5 < 6, keep 6)

Each element "sees" the top of the stack as its answer.
```

## Performance Comparison

| Approach | Time | Space | Operations for n=1000 |
|----------|------|-------|----------------------|
| Brute Force | O(n²) | O(n) | ~500,000 comparisons (avg) |
| Monotonic Stack | O(n) | O(n) | ~2,000 operations (avg) |

**Speedup:** ~250x faster for large inputs

## Common Mistakes

### Mistake 1: Scanning Left-to-Right
```typescript
// WRONG
for (let i = 0; i < nums2.length; i++) {
  // Can't determine next greater without looking ahead
}
```
You need future information, so scan **right-to-left**.

### Mistake 2: Wrong Comparison Operator
```typescript
// WRONG - should be <=, not <
while (stack.length > 0 && stack[stack.length - 1] < current) {
  stack.pop();
}
```
Equal elements should also be popped because they can't be "greater".

### Mistake 3: Forgetting to Push Current
```typescript
nextGreater.set(current, stack[stack.length - 1] ?? -1);
// MISSING: stack.push(current);
```
Current element must become a candidate for elements to its left.

### Mistake 4: Not Handling Empty Stack
```typescript
// WRONG - will throw error if stack is empty
nextGreater.set(current, stack[stack.length - 1]);

// CORRECT
nextGreater.set(current, stack.length > 0 ? stack[stack.length - 1] : -1);
```

## When to Use Each Approach

### Brute Force
- Array size < 100
- One-time computation
- Clarity more important than performance
- Learning/debugging phase

### Monotonic Stack
- Array size > 100
- Performance-critical code
- Production systems
- Interview settings (optimal solution expected)

## Key Takeaways

1. **Precomputation + Lookup:** When answering multiple queries about the same data, precompute all answers and use a map for O(1) lookup per query

2. **Monotonic Stack Pattern:** "Next greater/smaller element" problems are solved with monotonic stacks

3. **Right-to-Left Scan:** When you need information about what's to the right, scan right-to-left so you've already processed future elements

4. **Decreasing Order:** Maintaining decreasing order in the stack ensures the top is always the closest greater element

5. **Amortized O(n):** Each element is pushed and popped at most once, making the total time linear despite the nested while loop

## Related Problems

- **Next Greater Element II:** Circular array variation (use same stack technique with wraparound)
- **Daily Temperatures:** Same pattern, output distances instead of values
- **Largest Rectangle in Histogram:** Uses monotonic stack to find boundaries
- **Trapping Rain Water:** Monotonic stack tracks water level boundaries
- **Remove K Digits:** Monotonic stack to maintain smallest possible number

## Implementation in Other Languages

### Python
```python
def nextGreaterElement(nums1: List[int], nums2: List[int]) -> List[int]:
    next_greater = {}
    stack = []
    
    for num in reversed(nums2):
        while stack and stack[-1] <= num:
            stack.pop()
        next_greater[num] = stack[-1] if stack else -1
        stack.append(num)
    
    return [next_greater[num] for num in nums1]
```

### Go
```go
func nextGreaterElement(nums1 []int, nums2 []int) []int {
    nextGreater := make(map[int]int)
    stack := []int{}
    
    for i := len(nums2) - 1; i >= 0; i-- {
        current := nums2[i]
        
        for len(stack) > 0 && stack[len(stack)-1] <= current {
            stack = stack[:len(stack)-1]
        }
        
        if len(stack) > 0 {
            nextGreater[current] = stack[len(stack)-1]
        } else {
            nextGreater[current] = -1
        }
        
        stack = append(stack, current)
    }
    
    result := make([]int, len(nums1))
    for i, num := range nums1 {
        result[i] = nextGreater[num]
    }
    return result
}
```
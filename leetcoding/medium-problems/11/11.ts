// Brute Force
function maxArea_bruteforce(height: number[]): number {
  let maxArea = 0;
  let n = height.length;

  // Checking all pairs (i, j)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // compute the min height and width
      let minHeight = Math.min(height[i], height[j]);
      let width = j - i;
      let area = minHeight * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

// Two Pointers
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = minHeight * width;

    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

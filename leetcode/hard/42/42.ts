function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxHeightLeft = height[left];
  let maxHeightRight = height[right];

  let water = 0;

  while (left < right) {
    if (maxHeightLeft < maxHeightRight) {
      left++;
      if (height[left] < maxHeightLeft) {
        water += maxHeightLeft - height[left];
      } else {
        maxHeightLeft = height[left];
      }
    } else {
      right--;
      if (height[right] < maxHeightRight) {
        water += maxHeightRight - height[right];
      } else {
        maxHeightRight = height[right];
      }
    }
  }

  return water;
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreater = new Map<number, number>();
  const stack: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const current = nums2[i];

    while (stack.length > 0 && stack[stack.length - 1] <= current) {
      stack.pop();
    }

    nextGreater.set(current, stack.length > 0 ? stack[stack.length - 1] : -1);

    stack.push(current);
  }

  return nums1.map((num) => nextGreater.get(num)!);
}

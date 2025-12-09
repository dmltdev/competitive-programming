function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();

  for (const c of magazine) {
    if (map.has(c)) {
      const v = map.get(c) || 0;
      map.set(c, v + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (const c of ransomNote) {
    if (map.get(c)) {
      const v = map.get(c) || 0;
      map.set(c, v - 1);
    } else {
      return false;
    }
  }

  return true;
}

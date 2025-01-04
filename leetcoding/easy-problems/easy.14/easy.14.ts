export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  const sortedStrs = strs.sort((a, b) => a.localeCompare(b));
  const [first, last] = [sortedStrs[0], sortedStrs[sortedStrs.length - 1]];

  let prefix = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      return prefix;
    }

    prefix += first[i];
  }

  return prefix;
}

function groupAnagramsSorted(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(str);
  }

  return Array.from(groups.values());
}

function groupAnagramsCount(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const counts = new Array(26).fill(0);
    for (const char of str) {
      counts[char.charCodeAt(0) - 97]++;
    }
    const key = counts.join(",");

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(str);
  }

  return Array.from(groups.values());
}

function generateRandomString(length: number): string {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function generateTestData(numStrings: number, stringLength: number): string[] {
  const data: string[] = [];
  for (let i = 0; i < numStrings; i++) {
    data.push(generateRandomString(stringLength));
  }
  return data;
}

function benchmark(fn: (strs: string[]) => string[][], data: string[], runs: number = 100): number {
  const times: number[] = [];

  for (let i = 0; i < 10; i++) {
    fn(data);
  }

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    fn(data);
    const end = performance.now();
    times.push(end - start);
  }

  times.sort((a, b) => a - b);
  return times[Math.floor(times.length / 2)];
}

function runBenchmarks() {
  console.log("Group Anagrams Performance Comparison\n");
  console.log("=".repeat(70));

  const testCases = [
    { numStrings: 100, stringLength: 5, label: "Small strings (n=100, k=5)" },
    { numStrings: 100, stringLength: 50, label: "Medium strings (n=100, k=50)" },
    { numStrings: 100, stringLength: 200, label: "Large strings (n=100, k=200)" },
    { numStrings: 1000, stringLength: 10, label: "Many small strings (n=1000, k=10)" },
    { numStrings: 1000, stringLength: 100, label: "Many medium strings (n=1000, k=100)" },
  ];

  for (const testCase of testCases) {
    const data = generateTestData(testCase.numStrings, testCase.stringLength);

    const sortedTime = benchmark(groupAnagramsSorted, data);
    const countTime = benchmark(groupAnagramsCount, data);

    const faster = sortedTime < countTime ? "Sorted" : "Count";
    const speedup = (Math.max(sortedTime, countTime) / Math.min(sortedTime, countTime)).toFixed(2);

    console.log(`\n${testCase.label}`);
    console.log("-".repeat(70));
    console.log(`Sorted String:    ${sortedTime.toFixed(3)} ms`);
    console.log(`Character Count:  ${countTime.toFixed(3)} ms`);
    console.log(`Winner: ${faster} (${speedup}x faster)`);
  }

  console.log("\n" + "=".repeat(70));
}

runBenchmarks();

// Solution 1: Hash Map
// function canConstruct(ransomNote: string, magazine: string): boolean {
//   const map = new Map<string, number>();

//   for (const c of magazine) {
//     if (map.has(c)) {
//       const v = map.get(c) || 0;
//       map.set(c, v + 1);
//     } else {
//       map.set(c, 1);
//     }
//   }

//   for (const c of ransomNote) {
//     if (map.get(c)) {
//       const v = map.get(c) || 0;
//       map.set(c, v - 1);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// Solution 2: Progressively replace characters from ransomNote by matching them with characters from magazine

function canConstruct(ransomNote: string, magazine: string) {
  let note: string = ransomNote;
  for (const char of magazine) {
    note = note.replace(char, "");
  }
  return !note;
}

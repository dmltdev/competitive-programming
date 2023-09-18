const twoSort = (s) => s.sort()[0].split("").join("***");

console.log(twoSort(["apple", "banana", "cherry"]));
// Expected output: a***p***p***l***e

console.log(twoSort(["cat", "dog", "elephant", "zebra"]));
// Expected output: c***a***t

console.log(twoSort(["car", "bus", "train"]));
// Expected output: b***u***s

console.log(twoSort(["bat", "ball"]));
// Expected output: b***a***t

console.log(twoSort(["orange", "grapefruit", "kiwi", "melon"]));
// Expected output: g***r***a***p***e***f***r***u***i***t

const groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    const letter = str.split("").sort().join("");
    let result = map.get(letter) || [];
    result.push(str);
    map.set(letter, result);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

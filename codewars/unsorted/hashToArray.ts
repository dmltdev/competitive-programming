const convertHashToArray = (hash: {
  [key: string]: any;
}): (string | number)[] => {
  let arr: (string | number)[] = [];
  let keys: string[] = Object.keys(hash).sort();
  for (let key of keys) {
    let pair: any = [key, hash[key]];
    arr.push(pair);
  }
  return arr;
};

console.log(convertHashToArray({ name: "Jeremy", age: 24 }));

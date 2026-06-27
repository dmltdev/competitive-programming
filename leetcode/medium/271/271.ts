class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let ans = "";
    for (const s of strs) {
      ans += s.length + "#" + s;
    }
    return ans;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const result: string[] = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }

      const length = Number(str.slice(i, j));
      const strStart = j + 1;
      const strEnd = strStart + length;

      result.push(str.slice(strStart, strEnd));

      i = strEnd;
    }

    return result;
  }
}

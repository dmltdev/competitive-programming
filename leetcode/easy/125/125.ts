function isPalindrome(s: string): boolean {
  const phrase = s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "");
  console.log(phrase);
  if (phrase.length === 0) {
    return true;
  }

  let left = 0;
  let right = phrase.length - 1;

  while (left < right) {
    if (phrase[left] !== phrase[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

function halfAndHalf(text) {
  const middleIndex = text.length / 2;
  const firstHalf = text.slice(0, middleIndex).toLowerCase();
  const secondHalf = text.slice(middleIndex).toUpperCase();

  return firstHalf + secondHalf;
}


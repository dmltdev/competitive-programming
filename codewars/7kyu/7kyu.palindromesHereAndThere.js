function convertPalindromes(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let reversedNumber = parseInt(
      number.toString().split("").reverse().join(""),
      10,
    );
    if (number === reversedNumber) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
}

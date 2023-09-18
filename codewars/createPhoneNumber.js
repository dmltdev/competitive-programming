/*
function createPhoneNumber(numbers){
    let phoneNumber = '';
    if (numbers.length !== 10) {
        return "Incorrect number format! The function accepts only an array of 10 integers."
    }
    numbers.forEach((num, index) => {
        if (index === 0) {
            phoneNumber += '(';
        }
        phoneNumber += num;
        if (index === 2) {
            phoneNumber += ') ';
        }
        if (index === 5) {
            phoneNumber += '-';
        }
    })
    return phoneNumber;
}*/

// !Method 2 (More universal)
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

numArr = [0, 5, 0, 8, 0, 2, 8, 4, 9, 1];
console.log(createPhoneNumber(numArr));

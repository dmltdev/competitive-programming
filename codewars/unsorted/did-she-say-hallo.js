// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

// Method 1 with array.some
/*
function validateHello(greetings) {
  greetings = greetings.toLowerCase();
  greetings = greetings.replace(/[^a-z]/g, " ");
  greetings = greetings.split(" ");
  // console.log(greetings);
  const list = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  for (let i = 0; i < greetings.length; i++) {
    if (list.some(word => word === greetings[i])) {
      return true;
    }
  }
  return false;
}*/

// Method 2 (More concise and cleaner) using for.. of

function validateHello(greetings) {
  const list = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const words = [
    ...greetings
      .toLowerCase()
      .replace(/[^a-z]/g, " ")
      .split(" "),
  ];
  for (const word of words) {
    if (list.includes(word)) {
      return true;
    }
  }
  return false;
}

// Tests

console.log(
  validateHello(
    "BiEN? DOiNG, tREs. how TSChusS? tsChUss, wIE, doiNg hoMbRE hoMbRE: are LA HoLA ARE paSa, BiEn, TrEs ViSTa",
  ),
);

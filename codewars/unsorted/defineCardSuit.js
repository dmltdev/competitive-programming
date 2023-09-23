function defineSuit(card) {
  card = String(card.match(/[♣♠♦♥]/g));
  console.log(card);
  switch (card) {
    case "♣":
      return "clubs";
      break;
    case "♦":
      return "diamonds";
      break;
    case "♥":
      return "hearts";
      break;
    case "♠":
      return "spades";
      break;
    default:
      return "No card suit in the string";
  }
}

const test1 = 'Testing №2 for "Q♠"';

console.log(defineSuit(test1));

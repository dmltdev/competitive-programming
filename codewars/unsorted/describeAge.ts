const describeAge = (age: number) =>
  age < 13
    ? "You're a(n) kid"
    : age < 18
    ? "You're a(n) teenager"
    : age < 65
    ? "You're a(n) adult"
    : "You're a(n) elderly";

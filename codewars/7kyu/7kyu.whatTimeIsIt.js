/* 
7 kyu
What time is it?

Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Try not to use built-in Date/Time libraries.

Examples
"07:05:45PM"  -->  "19:05:45"
"12:00:01AM"  -->  "00:00:01"
"11:46:47PM"  -->  "23:46:47"
*/

const getMilitaryTime = function (input) {
  const format = input.slice(-2);

  const time = input.slice(0, -2);

  const [hh, mm, ss] = time.split(":");

  let militaryTime;

  if (format === "AM") {
    if (hh === "12") {
      militaryTime = `00:${mm}:${ss}`;
    } else {
      militaryTime = `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}:${ss.padStart(2, "0")}`;
    }
  } else if (format === "PM") {
    if (hh === "12") {
      militaryTime = `12:${mm.padStart(2, "0")}:${ss.padStart(2, "0")}`;
    } else {
      const militaryHours = String(Number(hh) + 12);
      militaryTime = `${militaryHours.padStart(2, "0")}:${mm.padStart(2, "0")}:${ss.padStart(2, "0")}`;
    }
  }

  return militaryTime;
};

getMilitaryTime("12:05:45AM"); //?

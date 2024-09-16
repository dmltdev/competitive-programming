/* 
539. Minimum Time Difference


Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1

Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0

 

Constraints:

    2 <= timePoints.length <= 2 * 104
    timePoints[i] is in the format "HH:MM".

*/

function findMinDifference(timePoints: string[]): number {
  const minutePoints = [];
  const totalMinutesInDay = 1440;
  let minDiff = totalMinutesInDay;

  for (const time of timePoints) {
    const [hours, minutes] = time.split(":");
    const totalMinutes = Number(hours) * 60 + Number(minutes);
    minutePoints.push(totalMinutes);
  }

  minutePoints.sort((a, b) => a - b);

  for (let i = 1; i < minutePoints.length; i++) {
    const diff = minutePoints[i] - minutePoints[i - 1];
    minDiff = Math.min(minDiff, diff);
  }

  const circularDiff =
    totalMinutesInDay - minutePoints[minutePoints.length - 1] + minutePoints[0];
  minDiff = Math.min(minDiff, circularDiff);

  return minDiff;
}

console.log(findMinDifference(["23:59", "00:00"]));
console.log(findMinDifference(["23:59", "00:00", "00:00"]));

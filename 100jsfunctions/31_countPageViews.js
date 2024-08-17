/*
Write a function named countPageViews that receives 3 parameters:

    pageViews - an Array of objects describing views of our page. Each object contains the number of views from a particular country, at a particular time and has the following properties:
        date - a Date
        country - a string representing a country code
        count - a number

    country - a string representing a country code

    interval - an object with 2 properties, startDate and endDate - each of them Dates

The function should return the number of page views from that country between those 2 dates (inclusive).
*/

/**
 * Counts the number of page views from a specific country within a given date interval.
 *
 * @param {Array<{ date: Date, country: string, count: number }>} pageViews - An array of objects representing page views.
 * @param {string} country - The country code to filter by.
 * @param {{ startDate: Date, endDate: Date }} interval - An object representing the interval with start and end dates.
 * @returns {number} - The total number of page views from the specified country within the given interval.
 */
function countPageViews(pageViews, country, interval) {
  const { startDate, endDate } = interval;

  return pageViews.reduce((total, view) => {
    const isTargetCountry = view.country === country;
    const isTargetInterval =
      view.date.getTime() >= startDate.getTime() &&
      view.date.getTime() <= endDate.getTime();

    if (isTargetCountry && isTargetInterval) {
      return total + view.count;
    }
    return total;
  }, 0);
}

const pageViews = [
  { date: new Date("2023-05-10T10:00:00Z"), country: "RO", count: 104 },
  { date: new Date("2023-05-05T10:00:00Z"), country: "USA", count: 151 },
  { date: new Date("2023-05-07T10:00:00Z"), country: "RO", count: 67 },
  { date: new Date("2023-05-10T10:00:00Z"), country: "CA", count: 89 },
  { date: new Date("2023-05-12T12:00:00Z"), country: "RO", count: 500 },
];

const interval = {
  startDate: new Date("2023-05-01T10:00:00Z"),
  endDate: new Date("2023-05-12T10:00:00Z"),
};

console.log(countPageViews(pageViews, "RO", interval));

export { countPageViews };

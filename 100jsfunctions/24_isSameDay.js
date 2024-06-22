function isSameDay(date1, date2) {
  function getDayMonthYear(date) {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getYear();

    return { day, month, year };
  }

  function compareDates(date1, date2) {
    return JSON.stringify(date1) === JSON.stringify(date2);
  }

  const firstDate = getDayMonthYear(date1);
  const secondDate = getDayMonthYear(date2);

  return compareDates(firstDate, secondDate);
}

function getMillisecondsBetween(date1, date2) {
    return Math.abs(Date.parse(date1) - Date.parse(date2));
}
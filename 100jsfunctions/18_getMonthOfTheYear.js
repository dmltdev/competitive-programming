function getMonthOfTheYear(date) {
    return date.toLocaleString('en-US', { month: 'long' });
}
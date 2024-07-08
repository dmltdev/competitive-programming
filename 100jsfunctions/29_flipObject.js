function flipObject(people) {
  const employees = {};

  for (const [key, value] of Object.entries(people)) {
    if (!(value in employees)) {
      employees[value] = [];
    }
    employees[value].push(key);
  }

  return employees;
}

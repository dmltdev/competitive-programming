function getHighestPaidEmployee(employees, departmentId) {
  const filteredEmployees = employees.filter(
    employee => employee.departmentId === departmentId
  );

  if (filteredEmployees.length === 0) return undefined;

  const sortedBySalary = filteredEmployees.sort((a, b) => b.salary - a.salary);
  return sortedBySalary[0].name;
}

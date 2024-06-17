/* 
20.getDevelopers

Write a function named getDevelopers that receives an Array of employees as parameter.

Each employee has the following props:

    name - a string
    job - one of the following values: developer, designer, manager
    age - a number

The function should return a new Array with all the employees that are developers.
Example 1
Input

employees
=

    Array(4)
        0: { age: 28, job: "developer", name: "Alice" }
        1: { age: 35, job: "designer", name: "Bob" }
        2: { age: 42, job: "manager", name: "Charlie" }
        3: { age: 31, job: "developer", name: "David" }
        <prototype>: (0) [ ]

Output

    Array(2)
        0: { age: 28, job: "developer", name: "Alice" }
        1: { age: 31, job: "developer", name: "David" }
        <prototype>: (0) [ ]
*/

function getDevelopers(employees) {
  return employees.filter(employee => employee.job === 'developer');
}

const employees = [
  { age: 28, job: 'developer', name: 'Alice' },
  { age: 35, job: 'designer', name: 'Bob' },
  { age: 42, job: 'manager', name: 'Charlie' },
  { age: 31, job: 'developer', name: 'David' },
];

const developers = getDevelopers(employees);
console.log(developers);

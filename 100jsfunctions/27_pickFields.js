/*
27.pickFields

Write a function named pickFields that receives 2 parameters:

    an object - data
    an Array of strings - fields

The function should return a new object that contains all properties of data whose name is present in the fields array.

 */
function pickFields(data, fields) {
  const result = {};

  for (const key in data) {
    if (fields.includes(key)) {
      result[key] = data[key];
    }
  }

  return result;
}

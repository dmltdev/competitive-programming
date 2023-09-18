/* 

!Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

!Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .

*/

const add = (x, y) => (y ? add(x ^ y, (x & y) << 1) : x);

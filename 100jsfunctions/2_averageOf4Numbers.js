/* 
2.averageOf4Numbers
Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.

Example 1
Input
nr1

=
11
nr2

=
9
nr3

=
33
nr4

=
28
Output
20.25

*/

/** 
 * @description
 * Ми робимо масив даних із arguments об'єкту, використовуючи destructuring assigment: [...arguments]
 * Після ми використовуємо метод '.reduce' для масиву даних, щоб отримати суму всіх елементів масиву: 
 * .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
 * Після ми суму чисел, отриманих з масиву даних, ділимо на довжину масиву (кількість елементів в масиві): sum / arguments.length
 * Все це можна записати коротко одним рядком.
*/

function averageOf4Numbers(nr1, nr2, nr3, nr4) {
  return [...arguments].reduce((a, c) => a + c, 0) / arguments.length;
}


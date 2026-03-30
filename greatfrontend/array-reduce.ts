/**
 * Array.prototype.reduce is a way of "reducing" elements in an array
 * by calling a "reducer" callback function on each element of the array in order,
 * passing in the return value from the calculation on the preceding element.
 *
 * The final result of running the reducer across all elements of the array
 * is a single value.
 *
 * Implement Array.prototype.reduce.
 * To avoid overwriting the actual Array.prototype.reduce
 * which is being used by the autograder,
 * we shall instead implement it as Array.prototype.myReduce.

 *
 * @see https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/array-reduce
 */

type CallbackFn<T, U> = (previousValue: U, currentValue: T, currentInde: number, array: T[]) => U;

Array.prototype.myReduce = function reducerFn<T, U>(
  callbackFn: CallbackFn<T, U>,
  initialValue?: U,
): U {
  const array = this as T[];

  if (initialValue === undefined && array.length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator: U;
  let startIndex: number;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = array[0] as unknown as U;
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    // sparse arrays - skip empty slots
    if (!(i in array)) continue;
    accumulator = callbackFn(accumulator, array[i], i, array);
  }

  return accumulator;
};

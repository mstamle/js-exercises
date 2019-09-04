/**
 * Perform reduce operation over an array
 *
 * @template A
 * @template T
 * @param reduceStepFunction {(accumulator: A, element: T) => A}
 * @param initialAccumulator {A}
 * @param array {T[]}
 * @returns {A}
 */

function reduce(reduceStepFunction, initialAccumulator, array) {
  if(array) {return array.reduce(reduceStepFunction,initialAccumulator);
  } else {
    return false
  }
}

/**
 * Calculate length of an array
 *
 * @template T
 * @param array {T[]}
 * @returns {number}
 */
function length(array) {
  return array.length;
}

const mapFunction = element => element + 1 

/**
 * Return an array with mapFunction applied to all elements of given array
 *
 * @template T
 * @template S
 * @param mapFunction {(element: T) => S}
 * @param array {T[]}
 * @returns {S[]}
 */
function map(mapFunction, array) {
  return array.map(mapFunction);
}

/**
 * Removes elements that do not satisfy the predicate from array
 *
 * @template T
 * @param predicate {(t: T) => boolean}
 * @array {T[]}
 * @returns {T[]}
 */
function filter(predicate, array) {
  let newArr = [];
  array.forEach(el => {
    if (predicate(el)) {
      newArr.push(el);
    }
  });
  return newArr;
}

/**
 * Returns `true` if the array is empty, `false` otherwise
 */

function isEmpty(array) {
  if (array.length === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Appends an element to the end of the given array
 */
function append(element, array) {
  array.push(element);
  return array;
}

/**
 * Prepends an element to the start of the array
 */
function prepend(element, array) {
  array.unshift(element)
  return array
}

/**
 * Removes up to `n` elements from the start of the array
 * (returns an empty array if array.length <= n)
 */

function drop(n, array) { // splice
  for (i = 0; i < n; i++) {
    array.shift();
  }
  return array;
}

/**
 * Takes up to `n` elements from start of the array
 * (returns an array if array.length <= n)
 */
function take(n, array) {
  if (n >= array.length) {
    return array.slice()
  } else {
    let newArr = []
    for (i=0;i<=array.length;i++){
      newArr.push[array[i]]
    }
    return newArr
  }
}

module.exports = {
  append,
  drop,
  filter,
  isEmpty,
  length,
  map,
  prepend,
  reduce,
  take,
};

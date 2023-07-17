'use strict';

/**
 * delete the set value from the array
 * @param {any[]} [arr] order array
 * @param {any} [value] test value
 * @return {any[]} resulting array
 */
const removeFromArray1 = (arr, ...values) => {
  debugger;
  const newArray = [...arr];
  const arg = [...values];
  const resultArray = [];

  for (const value of arg) {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray.includes(value)) {
        newArray.splice(newArray.indexOf(value), 1);
      }
    }
  }

  return newArray;
};

const removeFromArray2 = (arr, ...values) => {
  const newArray = [...arr];

  for (const value of values) {
    const index = newArray.indexOf(value);
    if (index !== -1) {
      newArray.splice(index, 1);
    }
  }
  return newArray;
};

module.exports = removeFromArray2;

'use strict';

/**
 * returns a specific member of the fibonacci sequence
 * @param {number} [number=0] given number
 * @returns {numbers} fibonacci sequence
 */
const fibonacci = (number = 0) => {
  debugger;
  if (number < 0) return 'OOPS';
  if (number === 0) return 0;
  if (number === 1) return 1;

  // F(n) = F(n-1) + F(n-2)

  // F0 	F1 	F2 	F3 	F4 	F5 	F6 	F7 	F8 	F9 	F10 	F11 	F12 	F13 	F14 	F15
  //  0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	  89 	  144 	233 	377 	610
  //  F16 	F17 	F18 	F19
  // 	987 	1597 	2584 	4181

  const arrayFibonacci = [0, 1];

  for (let n = 2; n <= number; n++) {
    const nextFibonacci = arrayFibonacci[n - 1] + arrayFibonacci[n - 2];
    arrayFibonacci.push(nextFibonacci);
    console.log(`n ${n} : F(n) ${nextFibonacci}`);
  }
  return arrayFibonacci[number];
};

const fibonacci2 = (number) => {
  if (number < 1) return 'OOPS';

  let firstNumber = 0;
  let lastNumber = 1;
  let nextFibonacci = 0;

  for (let i = 2; i <= number; i++) {
    nextFibonacci = firstNumber + lastNumber;
    firstNumber = lastNumber;
    lastNumber = nextFibonacci;
  }

  return number === 0 ? firstNumber : lastNumber;
};

module.exports = fibonacci2;

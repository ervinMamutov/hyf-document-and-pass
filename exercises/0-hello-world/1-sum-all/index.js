/**
 * sums all numbers between the first and the last including their
 * @ param {number} [first=0] first number
 * @ param {number} [second=0] last number
 * @ returns {number} sums all numbers between first and last including their
 */
const sumAll = (first, last) => {
  // condition
  if (first < 0 || last < 0) return 'ERROR';
  if (typeof first !== 'number' || typeof last !== 'number') return 'ERROR';
  if (Number.isNaN(Number(first)) || Number.isNaN(Number(last))) return 'ERROR';

  const [firstNumber, lastNumber] = [
    Math.min(first, last),
    Math.max(first, last),
  ];

  let sum = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;

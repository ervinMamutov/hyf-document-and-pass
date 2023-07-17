/**
 * repeat string predetermined number of times
 * @param {string} [text=''] origin text
 * @param {number} [number=1] number of times repetition
 * @returns {string} repetition text
 */
const repeatString = (text = '', number = 1) => {
  if (number < 0) return 'ERROR';
  return text.repeat(number);
};

module.exports = repeatString;

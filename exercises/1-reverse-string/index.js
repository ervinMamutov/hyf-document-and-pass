/**
 * text reversal
 * @param {string} [text=''] given text
 * @returns {string} reversed text
 */
const reverseString = (text = '') => {
  return text.split('').reverse().join('');
};

module.exports = reverseString;

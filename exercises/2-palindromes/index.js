/**
 * determines whether or not a given string is a palindrome
 * @param {string} [text=''] specified text
 * @returns {boolean} if text - palindrome -> true, else -> false;
 */
const palindromes = (text = '') => {
  const textToLowerCase = text.toLowerCase();
  const textSpecified = text.toLowerCase().replace(/[ .,!]/g, '');
  /* 
  const textSpecified = textToLowerCase
    .split(' ')
    .join('')
    .split('.')
    .join('')
    .split(',')
    .join('')
    .split('!')
    .join('');
     */
  const textResult = textSpecified.split('').reverse().join('');

  console.log(textSpecified);
  console.log(textResult);

  return textResult === textSpecified ? true : false;
};

module.exports = palindromes;

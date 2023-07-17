const palindromes = (text = '') => {
  const textToLowerCase = text.toLowerCase();
  const textSpecified = textToLowerCase
    .split(' ')
    .join('')
    .split('.')
    .join('')
    .split(',')
    .join('')
    .split('!')
    .join('');
  const textResult = textSpecified.split('').reverse().join('');

  console.log(textSpecified);
  console.log(textResult);

  return textResult === textSpecified ? true : false;
};

console.log(palindromes('Racecar!'));

/**
 * returns an array of titles
 * @param {arr[{}]} [books=[]] array of objects books with an author and a title
 * @returns {arr[]} array of title
 */
const getTheTitles = (books) => {
  const arrayTitle = [];
  for (const book of books) {
    if (book.hasOwnProperty('title')) {
      arrayTitle.push(book.title);
    }
  }
  return arrayTitle;
};

module.exports = getTheTitles;

/**
 *  determines a leap year
 * @param {number} [year] specified year
 * @returns {boolean} if year's leap -> true, else -> false
 */
const leapYears = function (year) {
  /* 

  yes :  The year must be evenly divisible by 4;
  no: If the year can also be evenly divided by 100, it is not a leap year;
	unless...
  yes: The year is also evenly divisible by 400. Then it is a leap year.
 */

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;

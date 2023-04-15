const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';

    try {
        date.getTime();
    } catch (error) {
        throw new Error('Invalid date!');
    }

    let result;
    let month = date.getMonth() + 1;
    if (month == 1 || month == 2 || month == 12) {
        result = 'winter';
    } else if (month == 3 || month == 4 || month == 5) {
        result = 'spring';
    } else if (month == 6 || month == 7 || month == 8) {
        result = 'summer';
    } else if (month == 9 || month == 10 || month == 11) {
        result = 'autumn';
    }

    return result;
}

module.exports = {
    getSeason
};
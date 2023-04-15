const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = '';
    if (str) {
        let digits = str.split('');
        let digit = digits[0];
        let count = 1;
        for (let i = 1; i < digits.length; i++) {
            if (digits[i] == digit) {
                count += 1;
            } else {
                result = result + count + digit;
                digit = digits[i];
                count = 1;
            }
            if (i == digits.length - 1) {
                result = result + count + digit;
            }
        }

    }
    let finish = '';
    for (let j = 0; j < result.length; j++) {
        if (result[j] != 1) {
            finish = finish + result[j];
        }
    }
    return finish;
}

module.exports = {
    encodeLine
};
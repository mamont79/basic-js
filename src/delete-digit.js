const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let a = n + '';
    let digits = a.split('');
    let arr = [];
    for (let i = 0; i < digits.length; i++) {
        digits[i] = '';
        let k = digits.join('');
        arr.push(+k);
        digits = a.split('');
    }
    let result = Math.max(...arr);


    return result;
}

module.exports = {
    deleteDigit
};
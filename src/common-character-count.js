const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let result = 0;
    if (s1 && s2) {
        let a = s1.split('').sort();
        let b = s2.split('').sort();
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    result += 1;
                    b[j] = ' ';
                    break;
                }
            }
        }
    }
    return result;
}

module.exports = {
    getCommonCharacterCount
};
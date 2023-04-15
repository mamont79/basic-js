const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let result = 0;
    let n = matrix[0].length;
    let check = [];
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] == 0) {
            check.push(0);
        } else {
            check.push(1);
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[j].length; k++) {
            result = result + matrix[j][k] * check[k];
            if (matrix[j][k] == 0) {
                check[k] = 0;
            }
        }
    }
    return result;
}

module.exports = {
    getMatrixElementsSum
};
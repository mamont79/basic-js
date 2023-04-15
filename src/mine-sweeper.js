const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let result = [];
    let w = matrix[0].length;
    let h = matrix.length;

    let check = [];
    let zeroArr = [];
    for (let i = 0; i < w + 2; i++) {
        zeroArr.push(0);
    }
    check.push(zeroArr);
    for (let j = 0; j < h; j++) {
        let arrInArr = [0];
        for (k = 0; k < w; k++) {
            if (matrix[j][k] == false) {
                arrInArr.push(0);
            } else {
                arrInArr.push(1);
            }

        }
        arrInArr.push(0);
        check.push(arrInArr);
    }
    check.push(zeroArr);

    for (let a = 1; a < check.length - 1; a++) {
        let arrInRes = [];
        for (let b = 1; b < check[a].length - 1; b++) {
            let count = check[a - 1][b - 1] + check[a][b - 1] + check[a + 1][b - 1] +
                check[a - 1][b] + check[a + 1][b] +
                check[a - 1][b + 1] + check[a][b + 1] + check[a + 1][b + 1];
            arrInRes.push(count);
        }
        result.push(arrInRes);
    }
    return result;
}

module.exports = {
    minesweeper
};
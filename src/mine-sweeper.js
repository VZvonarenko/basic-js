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
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        array.push([]);
        for (let j = 0; j < matrix[i].length; j++) {
            let bombs = 0;
            if (i > 0 && j > 0 && matrix[i - 1][j - 1] == true) {
                bombs += 1;
            }
            if (i > 0 && matrix[i - 1][j] == true) {
                bombs += 1;
            }
            if (i > 0 && j < matrix[i].length - 1 && matrix[i - 1][j + 1] == true) {
                bombs += 1;
            }
            if (j > 0 && matrix[i][j - 1] == true) {
                bombs += 1;
            }
            if (j < matrix[i].length - 1 && matrix[i][j + 1] == true) {
                bombs += 1;
            }
            if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1] == true) {
                bombs += 1;
            }
            if (i < matrix.length - 1 && matrix[i + 1][j] == true) {
                bombs += 1;
            }
            if (i < matrix.length - 1 && j < matrix[i].length - 1 && matrix[i + 1][j + 1] == true) {
                bombs += 1;
            }
            array[i].push(bombs);
        }
    }

    return array;
}

module.exports = {
    minesweeper
};
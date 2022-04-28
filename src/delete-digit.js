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
    let arr = String(n).split('');
    const arrLength = arr.length;
    let newArray = [];
    for (let i = 0; i < arrLength; i++) {
        arr = String(n).split('');
        arr.splice(i, 1);
        newArray.push(arr.join(''));
    }
    return Math.max(...newArray);
}

module.exports = {
    deleteDigit
};
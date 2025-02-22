const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let myArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            let item = arr.splice(i, 1, 0)[0];
            myArray.push(item);
        } else {
            continue;
        }
    }
    myArray.sort((a, b) => a - b);
    for (let item of myArray) {
        arr[arr.findIndex(el => el === 0)] = item;
    }
    return arr;
}

module.exports = {
    sortByHeight
};
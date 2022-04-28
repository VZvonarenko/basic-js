const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    const discardNext = "--discard-next";
    const discardPrev = "--discard-prev";
    const doubleNext = "--double-next";
    const doublePrev = "--double-prev";
    let newArr = [];
    if (!Array.isArray(arr))
        throw new NotImplementedError('Not implemented');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === discardNext) {
            i++;
        } else if (arr[i] === discardPrev) {
            if (newArr[newArr.length - 1] === arr[i - 1] && i > 0) {
                newArr.pop();
            }
        } else if (arr[i] === doubleNext) {
            if (i < arr.length - 1) {
                newArr.push(arr[i + 1]);
            }
        } else if (arr[i] === doublePrev) {
            if (newArr[newArr.length - 1] === arr[i - 1] && i > 0) {
                newArr.push(arr[i - 1]);
            }
        } else if (typeof arr[i] !== 'undefined') {
            newArr.push(arr[i])
        }
    }
    return newArr;
}


module.exports = {
    transform
};
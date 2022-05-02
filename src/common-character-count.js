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
    let count = 0;
    let array = [];
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            if (array.includes(s1[i])) {
                continue;
            } else {
                array.push(s1[i]);
                let temp = Math.min(s1.split('').filter(item => item === s1[i]).length, s2.split('').filter(item => item === s1[i]).length);
                count += temp;
            }
        }
    }
    return count;
}

module.exports = {
    getCommonCharacterCount
};
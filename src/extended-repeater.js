const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let s = String(str);
    let result = String(str);
    let rep = Number(options.repeatTimes);
    let separ = '+';
    if (options.separator) {
        separ = String(options.separator);
    }
    let addit = '';
    let addRep = 0;
    let addSep = '';
    if (options.addition || typeof options.addition === 'boolean' || options.addition === null) {
        addit = String(options.addition);
        result = result + addit;
        if (options.additionRepeatTimes) {
            addRep = Number(options.additionRepeatTimes);
            if (options.additionSeparator) {
                addSep = String(options.additionSeparator);
            } else if (!options.additionSeparator) {
                addSep = '|';
            }
            for (let i = 1; i < addRep; i++) {
                result = result + addSep + addit;
            }
        }
        s = result;
    }
    if (rep > 1) {
        for (let j = 1; j < rep; j++) {
            result = result + separ + s;
        }
    }
    return result;
}

module.exports = {
    repeater
};
const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    let age;
    let result = false;
    if (sampleActivity) {
        if (typeof sampleActivity == 'string' && typeof(+sampleActivity) == 'number' && (+sampleActivity) > 0 && (+sampleActivity) < MODERN_ACTIVITY) {
            age = HALF_LIFE_PERIOD * (Math.log(MODERN_ACTIVITY / +sampleActivity) / Math.log(2));
            result = Math.ceil(age);
            return result;
        }
    }
    return result;
};

module.exports = {
    dateSample
};
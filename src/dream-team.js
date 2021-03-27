const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let arr = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            arr.push(members[i][0]);
        }
    }
    return arr.sort().join('').toUpperCase();
};
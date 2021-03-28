const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(isDirMach) {
        this.isDirMach = isDirMach;
    }

    encrypt(str, key) {
        if (!str || !key) {
            throw new Error();
        }
        if (this.isDirMach === false) {
            str = str.split('').reverse().join('');
        }
        return str;
    }
    decrypt(str, key) {
        if (!str || !key) {
            throw new Error();
        }
        if (this.isDirMach === true) {
            return str;
        }

    }
}

module.exports = VigenereCipheringMachine;
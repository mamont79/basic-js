const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Both message and key are required');
        }

        message = message.toUpperCase();
        key = key.toUpperCase();

        let result = [];
        let encrypted = '';


        return result;
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Both encrypted message and key are required');
        }

        encryptedMessage = this.direct ? encryptedMessage.toUpperCase() : encryptedMessage.split('').reverse().join('').toUpperCase();
        key = key.toUpperCase();

        let decrypted = '';



        return decrypted;
    }

}


module.exports = {
    VigenereCipheringMachine
};
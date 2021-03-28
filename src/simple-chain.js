const chainMaker = {

    chain: '',

    getLength(n) {
        return this.chain.length;
    },
    addLink(value) {

        this.chain.push(value.toString());
    },
    removeLink(position) {

        this.chain.splice(position + 1, 1);
    },
    reverseChain() {

        let res = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(this.chain[i]);
        }
        this.chain = res;
    },
    finishChain() {

        let result = this.chain.join(' )~~( ');
        return '( ' + result + ' )'
    }
};

module.exports = chainMaker;
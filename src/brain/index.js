const trainCrossword = require('./trainCrossword');
const normalize = require('./normalize');
const brain = require('brain.js');

module.exports = class JapanCrossword {

    constructor() {
        let config = {
            binaryThresh: 0.5,     // ¯\_(ツ)_/¯
            hiddenLayers: [3],     // array of ints for the sizes of the hidden layers in the network
            activation: 'sigmoid' // Supported activation types ['sigmoid', 'relu', 'leaky-relu', 'tanh']
        }
        this.net = new brain.recurrent.RNN(config);
    }

    train(crossword) {
        let normCross = normalize.crossword(crossword);
        console.log(JSON.stringify(crossword, null, 4));
        console.log(JSON.stringify(normCross, null, 4));
    }

    run(crossword) {

    }


}

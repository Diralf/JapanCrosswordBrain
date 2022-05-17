module.exports = class Line {
    constructor(input, output) {
        this.input = input;
        this.output = output;
    }

    toString() {
        return this.input.toString() + "|" + this.output.toString();
    }
}

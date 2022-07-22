class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.res = Math.round((this.max - this.min)/ 2 + this.min);
      return this.res
    }

    lower() {
      this.setRange(this.min, this.res)
    }

    greater() {
      this.setRange(this.res, this.max)
    }
}

module.exports = GuessingGame;

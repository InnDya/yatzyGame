class Player {
    constructor (id) {
        this.dice = new Dice();
        this.id = id;           
        this.rollsleft = 3;
    }

    throw() {
        this.dice.throw();
    }

    throwsLeft() {
        return this.dice.throwsLeft;
    }

    refresh() {
        this.dice.refresh();
    }
}

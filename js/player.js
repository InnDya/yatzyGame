class Player {
    constructor (id) {
        this.dice = new Dice();
        this.id = id;
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

    newRound() {
        this.dice = new Dice();
    }
}

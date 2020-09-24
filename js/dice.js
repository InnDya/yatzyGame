class Dice {
    constructor(size = 5) {         
        this.throwsLeft = 3;
        this.dice = [];

        for (let i = 0; i < size; i++) {                   //loops through the empty array
            this.dice.push(new Die("dice" + (i + 1)));   //for each index in array a new Die is created
        }                                                //"dice1", "dice2"..."dice5"
    }

    throw() {
        if (this.throwsLeft == 0) return;
        const CheckBoxes = document.querySelectorAll('input[type=checkbox]');
        for (var i = 0; i < this.dice.length; i++) {
            if (!CheckBoxes[i].checked) {
                this.dice[i].throw();
            }
        }
        this.throwsLeft--;
    }

    refresh() {
        for (let die of this.dice) {
            die.refresh();
        }
    }
}

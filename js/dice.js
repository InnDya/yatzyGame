class Dice {
    constructor(size = 5) {         
        this.throwsLeft = 3;
        this.dice = [];

        for (let i = 0; i < size; i++) {                   //loops through the empty array
            this.dice.push(new Die("dice" + (i + 1)));   //for each index in array a new Die with random value is created
        }                                                //"dice1", "dice2"..."dice5"
    }

    //Throw dice if checkbox is not checked and player has throws left. Decreases throws left.
    throw() {
        if (this.throwsLeft == 0) return;               // if no throws left, exit.
        const CheckBoxes = document.querySelectorAll('input[type=checkbox]');
        for (var i = 0; i < this.dice.length; i++) {
            if (!CheckBoxes[i].checked) {               //if checkbox for dice not checked -> throw dice
                this.dice[i].throw();
            }
        }
        this.throwsLeft--;                              //decrease throws left with 1
    }

    //For each value in array, refresh dices to 0 when called. 
    refresh() {                                         
        for (let die of this.dice) {                //for each die in array dice
            die.refresh();                          // for each die do refresh
        }
    }

}

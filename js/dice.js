class Dice {
    constructor(size = 5) {
        this.dice = [];
        this.dice_values = new Array(7).fill(0);

        for (let i = 0; i < size; i++) {

            this.dice.push(new Die("dice" + (i + 1)));
            
        }

        this.calculateDiceValues();
    }

    calculateDiceValues() {
        this.dice_values = new Array(7).fill(0);

        this.dice.map(current_value => {
            this.dice_values[current_value.value]++;
        })
    }

    throw() {
        const CheckBoxes = document.querySelectorAll('input[type=checkbox]');
        for (let die of this.dice) {
            


            for(var i = 0; i < CheckBoxes.length; i++){
        
                if (CheckBoxes[i].checked == false) {

                   // var die = dices[i];
                    //console.log(dices);
                    
                    die.throw();
             }
        this.calculateDiceValues();
            }
        }
    }

}
//const CheckBoxes = document.querySelectorAll('input[type=checkbox]');
//const dices = document.querySelectorAll(".dices");
//console.log(dices.value);
//console.log(CheckBoxes);
    //}
//}

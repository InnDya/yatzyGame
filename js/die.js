class Die {
    constructor(id) {    //where does id come from? When new Die is used in class Dice, it is taken as a parameter.
        this.id = id;
        this.value = 0;
    }
    
    //method to throw dice and get a random value.
    throw() {
        this.value = this.getNewValue();       // if value = 6
        document.getElementById(this.id).value = this.value;   //document.getElementById("dice1").value = 6 
    }

    //Empties fields for dice
    refresh() {
        document.getElementById(this.id).value = this.value;  // this.value = 0 put into a dice field.
    }

    // get random number 
    getNewValue() {                                 
        return Math.floor(Math.random() * 6) + 1;
    }
}


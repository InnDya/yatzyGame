class Die {
    constructor(id) {
        this.value = this.getNewValue();
        this.id = id;
        this.hold = false; 
    
    }

     checked () {
    const CheckBoxes = document.querySelectorAll('input[type=checkbox]');
    const dices = document.querySelectorAll(".dices");
        for(var y = 0; y < CheckBoxes.length; y++){
        
            if (CheckBoxes[y].checked == false) {
    
                var dice = dices[y];
                
                rollDice(dice); 
        

     }



    throw() {

        this.value = this.getNewValue();
    
        document.getElementById(this.id).value = this.value;
        
    }

    getNewValue() {
        return Math.floor(Math.random() * 6) + 1;
    }
}


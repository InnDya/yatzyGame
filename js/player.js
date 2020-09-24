class Player {
    constructor () {
        this.rollsleft = 3;
        this.changePlayer = 1;


    }

    rollsLeft() {
        
        this.rollsleft--
       
    }
    nextPlayer() {
        this.changePlayer += 1
        this.rollsleft = 4;
        if (this.changePlayer === 3) {
            this.changePlayer = 1;
        }
    }

}
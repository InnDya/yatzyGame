class Game {
    constructor() {
        this.players = [1, 2];
    }

        // Calculates sum, bonus and totalsum for each player in a generic way. 
    allSums() {
        // Loop through the players
        for (let player of this.players) {
            // Get the relevant components
            let fields = document.querySelectorAll(".player" + player + ".part_sum");  // elements with classes
            var sum = 0;

            // Adds all field values to the sum from ones,twos....sixes
            for (let field of fields) {
                if (!isNaN(Number(field.valueAsNumber))) {
                    sum += Number(field.valueAsNumber);         
                }
            }

            // Update the sum in the form
            let partsum_field = document.querySelector(".sum1 .player" + player);
            partsum_field.innerHTML = sum;

            //bonus check
            let bonus =0;

             if (sum >= 63) {
                 bonus = 50;           
             }      

             // Update bonus in the form
             var bonus_field = document.querySelector(".bonus .player" + player);
             bonus_field.innerHTML = bonus;
            
             // Update total sum in the form
            let totalSum_field = document.querySelector(".totalsum .player" + player);
            totalSum_field.innerHTML = sum + bonus;  
        }
    }
    
    
}
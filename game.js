class Game {
    constructor() {
        this.players = [1, 2];
    }

    partSum() {
        // Loop through the players
        for (let player of this.players) {
            // Get the relevant components
            let fields = document.querySelectorAll(".player" + player + ".part_sum");
            let sum = 0;

            // Add all field values to the sum
            for (let field of fields) {
                if (!isNaN(Number(field.valueAsNumber))) {
                    sum += Number(field.valueAsNumber);
                }
            }

            // Update the sum in the form
            let partsum_field = document.querySelector(".sum1 .player" + player);
            partsum_field.innerHTML = sum;
        }
    }
}
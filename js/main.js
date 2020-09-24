document.addEventListener("DOMContentLoaded", function() {
    let game = new Game();
    let dice = new Dice();
    let player = new Player();

    let btnThrowDice = document.getElementById("btnThrowDice");
    btnThrowDice.addEventListener("click", function () {
          player.rollsLeft();
        if (player.rollsleft >= 0) {
            dice.throw();
            document.getElementById("rollsleft").innerHTML = "Kast kvar: " + player.rollsleft;
        }
        
    })

    let btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener("click", function () {
        game.partSum();
    
    })

    let btnChangePlayer = document.getElementById("changePlayer");
    btnChangePlayer.addEventListener("click", function () {
        player.nextPlayer();
        document.getElementById("player").innerHTML = "Spelare" + player.changePlayer;

    })
})

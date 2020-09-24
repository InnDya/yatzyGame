document.addEventListener("DOMContentLoaded", function() {
    //2 players,
    let game = new Game();
    let playersCount = 2;
    let players = [];
    for (let i = 0; i < playersCount; i++) {
        players.push(new Player(i+1));
    }
    let currentPlayer = 0;

    let btnThrowDice = document.getElementById("btnThrowDice");
    btnThrowDice.addEventListener("click", function () {
        let player = players[currentPlayer];
        if (player.throwsLeft() > 0) {
            player.throw();
            document.getElementById("rollsleft").innerHTML = "Kast kvar: " + player.throwsLeft();
        }
        
    })

    let btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener("click", function () {
        game.allSums();
    })

    let btnChangePlayer = document.getElementById("changePlayer");
    btnChangePlayer.addEventListener("click", function () {
        const checkBoxes = document.querySelectorAll('input[type=checkbox]');
        for (let checkBox of checkBoxes)
            checkBox.checked = false;
        currentPlayer++;
        if (currentPlayer == playersCount) {
            currentPlayer = 0;
            for (let player of players) {
                player.newRound();
            }
        }
        let player = players[currentPlayer];
        player.refresh();
        document.getElementById("player").innerHTML = "Spelare" + player.id;
        document.getElementById("rollsleft").innerHTML = "Kast kvar: " + player.throwsLeft();
    })
})

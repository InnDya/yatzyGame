document.addEventListener("DOMContentLoaded", function() {

    let game = new Game();
    let playersCount = 2;
    let players = [];
    for (let i = 0; i < playersCount; i++) {
        players.push(new Player(i+1)); // [0]: 0+1 = 1 -> new Player(1). Pushes two players to array players.
    }
    let currentPlayer = 0;         

    // on click of button throwDice -> check if throws left -> throw. Replace Kast kvar with amount of throws left. 
    let btnThrowDice = document.getElementById("btnThrowDice");  
    btnThrowDice.addEventListener("click", function () {
        let player = players[currentPlayer];                    // players[0] = player1    Unclear 
        if (player.throwsLeft() > 0) {                       
            player.throw();
            document.getElementById("rollsleft").innerHTML = "Kast kvar: " + player.throwsLeft();  
        }
        
    })

    //Beräkna-button stuff to calculate sums + bonus +total sum
    let btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener("click", function () {
        game.allSums();
    })

    //Byt spelare- button stuff
    let btnChangePlayer = document.getElementById("changePlayer");
    btnChangePlayer.addEventListener("click", function () {
        const checkBoxes = document.querySelectorAll('input[type=checkbox]'); //Nodelist array
        for (let checkBox of checkBoxes)                                       //loops through Nodelist and check checkbox status
            checkBox.checked = false;
        currentPlayer++;                                                        //change value of player

        if (currentPlayer == playersCount) {                                //Holds current player as 0 or 1.
            currentPlayer = 0;
        }
        let player = players[currentPlayer];                //Chooses which player to refresh
        player.refresh();
        document.getElementById("player").innerHTML = "Spelare" + player.id;
        document.getElementById("rollsleft").innerHTML = "Kast kvar: " + player.throwsLeft();
    })
})

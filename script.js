

/*var x = 3

//var diceRoll = Math.floor( Math.random() * 6 ) +1;
//console.log('You rolled a ' + diceRoll);


for(let i = 0; i===x; i++){
    var diceRoll = Math.floor( Math.random() * 6 ) +1;
    console.log('You rolled a ' + diceRoll);
}
*/

let player1One = parseInt(document.getElementById("player1One").value, 10);
let player1Two = parseInt(document.getElementById("player1Two").value, 10);
//let player1Three = parseInt(document.getElementById("player1Three").value, 10);
//let player1Four = parseInt(document.getElementById("player1Four").value, 10);
//let player1Five = parseInt(document.getElementById("player1Five").value, 10);
//let player1Six = parseInt(document.getElementById("player1Six").value, 10);


//let x = parseInt(player1One, 10);
//let y = parseInt(player1Two, 10);


let playerOneScore = player1One + player1Two;
let calc_button = document.getElementById("calc");

// Ha koll på om någon klickar på beräkna-knappen.
calc_button.addEventListener("click", function(event) {
    document.getElementById("playerOneScore").innerHTML = playerOneScore;
})



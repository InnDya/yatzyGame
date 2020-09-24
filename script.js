class Dice {

    constructor() {
        this.hold = false;
        this.value = 0;    
    }

    checked (value) {
        this.hold = value;
    }

    roll () {
        if (!this.hold) {
            this.value = Math.floor(Math.random() * 6) + 1;
        }
         
    }

    getValue (){
        return this.value
    }
}

var dice1 = new Dice();
var dice2= new Dice();
var dice3 = new Dice();
var dice4 = new Dice();
var dice5= new Dice();

dice1.roll();
var ele = document.querySelector("#dice1");

ele.src = "Diceimg/" + dice1.getValue() + ".png";

for (let i = 0; i < dice.length; i++)
    dice[i] = new Die ("dice_" + (i + 1))
/*document.addEventListener("DOMContentLoaded", function (e) {

    - gör class för alla player1 inputfält. 
    class Dice {

        constructor() {
            this.hold = false;
            this.value = 0;    
        }

        checked (value) {
            this.hold = value;
        }

        roll () {
            if (!this.hold) {
                this.value = Math.floor(Math.random() * 6) + 1;
            }
             
        }

        getValue (){
            return this.value
        }
    }
    debugger
    let dice1 = new Dice()

    class Game {
        constructor(nmb_player = 1) {
            this.nmbPlayers = nmb_player;
            this.players = [];
            for (let i = 0; i < nmb_player; i++) {
                this.players.push(new Player());
            }

        }  
        playersTurn() {
            if (player1.rollsLeft === 0) {
            } 
            if (player2.rollsLeft === 0) {
                return this; 
            }
            

        }

    }
    

    class Player {
        constructor() {
        this.rollsLeft = 0;
        this.sum = 0;
        this.totalSum = 0;
        this.bonus = false;
        this.name = name; 
        
       
        
         }
         throws() {
            
            let i = 3;
            i--;
            if (i <= -1) {
                rollsleft.innerHTML = "Kast kvar: " + 0;
                return;
            }
            else {
                rollsleft.innerHTML = "Kast kvar: " + i;
                  
            }

         }
         

    }


   let player1 = new Player();
   player1 = document.getElementById("p1");
   let player2 = new Player();
   player2 = document.getElementById("p2")
   console.log(player1);

   /* document.addEventListener("change", function(e) {     // when event "change" occurs, do the following:
        for (let player = 1; player <=1; player++) {    // loop through all players (now only player1)
            let elements = document.getElementsByClassName("player" + player + " sum");     // create array, elements with classes "player1 sum":

            let sum = 0;
            let bonus = 0;

            for (let element of elements) {             // for each element in array elements
                sum +=element.valueAsNumber;            // put sum + value of element into sum. 
            }
            document.getElementById("player" + player + "_sum").value = sum;

        
            if (sum >= 63) {                             //bonus check
                bonus = document.getElementById("player" + player+ "_bonus");                                       
                bonus.value = 50;                       //extra 50 points put to field id="bonus"
                console.log(bonus.value)
            }
                
            document.getElementById("totalsum").value = sum + bonus; //something odd, check why. Works ok until player gets bonus.

        };
    }); 



    let btnClick = document.getElementById("roll");
    let rollsleft = document.getElementById("rollsleft");
    let i = 3;
    

    btnClick.addEventListener("click", function (e) {
    i--;
    
    if (i <= -1) {
        rollsleft.innerHTML = "Kast kvar: " + 0;
        return;
    }
    else {
        rollsleft.innerHTML = "Kast kvar: " + i;
        
        
        
    }

    const CheckBoxes = document.querySelectorAll('input[type=checkbox]');
    const dices = document.querySelectorAll(".dices");
    
    for(var y = 0; y < CheckBoxes.length; y++){
        
        if (CheckBoxes[y].checked == false) {

            var dice = dices[y];
            
            rollDice(dice); 

        }
    } 
    

    function rollDice(dice) {
        let slump = Math.floor(Math.random() * 6) + 1;
        dice.src = "Diceimg/" + slump + ".png";
        dice.value = slump;
        
    }
        
    let diceValues = [];

    for (dice of dices) {
        diceValues.push(dice.value)
        
    }

    let kaffe = 0;
    diceValues.forEach(diceFilter);

    function diceFilter(item) {

        kaffe += item;
        console.log(item);
        

        document.getElementById("player1Two").value = kaffe;
        
    }
    
    
})

 
});*/

document.addEventListener("DOMContentLoaded", function (e) {

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

 */
});

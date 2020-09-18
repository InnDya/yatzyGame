document.addEventListener("DOMContentLoaded", function (e) {

    
    let sumField = document.getElementById("playerOneScore");
    let totalSumField = document.getElementById("totalsum");
    let bonusField = document.getElementById("bonus");

    document.getElementById("form").addEventListener("input", function (e) {  // Tar inputs för spelare 1 (ettor, tvåor, treor, fyror, femmor, sexor) och summar resultaten in variable sum. 
        let sum = 0;
        let elements = document.querySelectorAll("input[class=player1]");     // väljer alla elements som är input och innehåller klass player1. Lägger dom in variabel elements. Elements är en array.
        elements.forEach(function(element) {                                 // loopar igenom arrayen elements och kör funktionen för varje värde i arrayen. 
            let value = parseInt(element.value);                            // element.value är innehållet i elementet. Konverterar från string till number, och lägger till värden i variabel value. value är en array. 
            if (!isNaN(value))                                              // om value är av typ number
                sum += value;                                               // sum = sum + value. 
        });

        sumField.innerHTML = sum;

        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.innerHTML = bonus;
        totalSumField.innerHTML = bonus + sum;


    })



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


});

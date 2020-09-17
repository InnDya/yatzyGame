document.addEventListener("DOMContentLoaded", function (e) {

    let player1One = document.getElementById("player1One");
    let player1Two = document.getElementById("player1Two");
    let player1Three = document.getElementById("player1Three");
    let player1Four = document.getElementById("player1Four");
    let player1Five = document.getElementById("player1Five");
    let player1Six = document.getElementById("player1Six");
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

        // tmp = player1One.value;
        // if (typeof (Number(tmp)) === "number") {
        //     sum += Number(tmp);
        // }
        // tmp = player1Two.value;
        // if (!isNaN(Number(tmp))) {
        //     sum += Number(tmp);
        // }
        // tmp = player1Three.value;
        // if (typeof (Number(tmp)) === "number") {
        //     sum += Number(tmp);
        // }
        // tmp = player1Four.value;
        // if (!isNaN(Number(tmp))) {
        //     sum += Number(tmp);
        // }
        // tmp = player1Five.value;
        // if (typeof (Number(tmp)) === "number") {
        //     sum += Number(tmp);
        // }
        // tmp = player1Six.value;
        // if (!isNaN(Number(tmp))) {
        //     sum += Number(tmp);
        // }

        sumField.innerHTML = sum;

        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.innerHTML = bonus;
        totalSumField.innerHTML = bonus + sum;


    })

})

let btnClick = document.getElementById("roll");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let rollsleft = document.getElementById("rollsleft");
let i = 3;
let donedice = document.getElementById("donedice");


btnClick.addEventListener("click", function (e) {
    i--;
    if (i <= -1) {
        rollsleft.innerHTML = "Kast kvar: " + 0;
        return;
    }
    else {
        rollsleft.innerHTML = "Kast kvar: " + i;
    }

    // Viktorias förslag för att bli av med if-satserna på raderna 90-114. 
    /*  const box = [box1, box2, box3, box4, box5];
        const checkedBox = box.filter((value, index, array)=>{
            return value == checked;
        });
        console.log(checkedBox);
    */

    if (document.getElementById("box1").checked == false) {
        var slump1 = Math.floor(Math.random() * 6) + 1;
        dice1.src = "Diceimg/" + slump1 + ".png"

    }
    if (document.getElementById("box2").checked == false) {
        var slump2 = Math.floor(Math.random() * 6) + 1;
        dice2.src = "Diceimg/" + slump2 + ".png"

    }
    if (document.getElementById("box3").checked == false) {
        var slump3 = Math.floor(Math.random() * 6) + 1;
        dice3.src = "Diceimg/" + slump3 + ".png"

    }
    if (document.getElementById("box4").checked == false) {
        var slump4 = Math.floor(Math.random() * 6) + 1;
        dice4.src = "Diceimg/" + slump4 + ".png"

    }
    if (document.getElementById("box5").checked == false) {
        var slump5 = Math.floor(Math.random() * 6) + 1;
        dice5.src = "Diceimg/" + slump5 + ".png"

        console.log(slump1, slump2, slump3, slump4, slump5);

    }


}

)


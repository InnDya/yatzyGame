document.addEventListener("DOMContentLoaded", function (e) {

    document.addEventListener("change", function(e) {     // when event "change" occurs, do the following:
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
});

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
    // Slumptal ska stoppas in i box1, box2, box3 osv. 
    var slump = Math.floor(Math.random() * 6) + 1;

    for (dice of box){
        //lägg in slump för varje värde av array box. Då kanske har vi ett array med slumptal för varje tärning. 
    }

    const box = [box1, box2, box3, box4, box5];
    const checkedBox = box.filter((value, index, array)=>{
        return value == checked;
    });
    console.log(checkedBox);
    

    /*if (document.getElementById("box1").checked == false) {
        var slump = Math.floor(Math.random() * 6) + 1;
        dice1.src = "Diceimg/" + slump + ".png"

    }
    if (document.getElementById("box2").checked == false) {
        var slump = Math.floor(Math.random() * 6) + 1;
        dice2.src = "Diceimg/" + slump + ".png"

    }
    if (document.getElementById("box3").checked == false) {
        var slump = Math.floor(Math.random() * 6) + 1;
        dice3.src = "Diceimg/" + slump + ".png"

    }
    if (document.getElementById("box4").checked == false) {
        var slump = Math.floor(Math.random() * 6) + 1;
        dice4.src = "Diceimg/" + slump + ".png"

    }
    if (document.getElementById("box5").checked == false) {
        var slump = Math.floor(Math.random() * 6) + 1;
        dice5.src = "Diceimg/" + slump + ".png"

    }
    */

}

)

